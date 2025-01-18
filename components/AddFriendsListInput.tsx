'use client'

import Image from 'next/image'
import { useState } from 'react'

import { useToast } from '@/hooks/use-toast'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { addFriendsWishlist } from '@/lib/actions'

export default function AddFriendsListInput({userId}: { userId: string }) {
    const [value, setValue] = useState('')

    const { toast } = useToast()

    const handleSubmit = async () => {
        if (!value.length) {
            toast({title: 'Упс', description: 'Поле идентификатора не может быть пустым.'})
            return
        }

        setValue('')

        const result = await addFriendsWishlist(value, userId)
        if (result.status === 'success') {
            toast({title: 'Отлично', description: 'Вишлист друга добавлен.'})
        } else {
            toast({title: 'Ошибочка', description: 'Возможно, указан некорректный ID.'})
        }
    }

    return (
        <form className='flex' action={handleSubmit}>
            <Input
                value={value}
                className='h-[44px] rounded-none rounded-tl-[20px] rounded-bl-[20px] bg-primary-400
            border border-primary-inputBorder text-[13px] font-semibold text-primary'
                placeholder='ID'
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            <Button
                type='submit'
                className='w-[49px] h-[44px] bg-primary-100 border border-primary-inputBorder
                     border-l-0 rounded-tr-[20px] rounded-br-[20px]'>
                <Image src='/check.svg' className='max-w-none h-[19px]' width={21} height={19} alt=''/>
            </Button>
        </form>
    )
}
