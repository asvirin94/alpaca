'use client'

import { useRouter } from 'next/navigation'

import { useActionState, useState } from 'react'

import { z } from 'zod'

import { newWishlistSchema } from '@/lib/validation'
import { createWishlist } from '@/lib/actions'
import { useToast } from "@/hooks/use-toast"

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function NewWishlistForm() {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const router = useRouter();
    const {toast} = useToast();

    const handleFormSubmit = async (_: unknown, formData: FormData) => {
        try {
            const formValues = {
                originalTitle: formData.get('originalTitle') as string,
                image: formData.get('image') as string,
            }

            await newWishlistSchema.parseAsync(formValues)

            const result = await createWishlist(formData)

            if (result.status === 'success') {
                toast({
                    title: 'Отлично!',
                    description: `Вишлист ${formValues.originalTitle} создан`
                })

                router.push('/')
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErorrs = error.flatten().fieldErrors
                setErrors(fieldErorrs as unknown as Record<string, string>)

                toast({
                    title: 'Ошибка',
                    description: 'Проверьте введенные данные',
                    variant: "destructive",
                })
            } else {
                toast({
                    title: 'Неудача :(',
                    description: 'Что-то пошло не так',
                })
            }
        }
    }

    const [, formAction, isPending] = useActionState(handleFormSubmit, undefined)

    return (
        <form
            className='mt-[30px] flex flex-col items-center gap-5'
            action={formAction}
        >
            <div className='w-full'>
                <Input
                    id='originalTitle'
                    name='originalTitle'
                    required
                    placeholder='Название'
                />
                {errors.originalTitle && <p>{errors.originalTitle}</p>}
            </div>

            <div className='w-full'>
                <Input
                    id='image'
                    name='image'
                    required
                    placeholder='Ссылка на изображение'
                />
            </div>

            <Button disabled={isPending} type='submit' className='w-20'>
                <span>{isPending ? 'Создаем...' : 'Создать'}</span>
            </Button>
        </form>
    )
}
