import { useQuery } from '@tanstack/react-query'
import { useContext } from "react"
import { AuthContext } from "../../Layouts/AuthProvider/AuthProvider"
import useAexiosSerure from '../useAexiosSerure'


const useCart = () => {
    const { user,isLoading } = useContext(AuthContext)
    const [axiosSerure] = useAexiosSerure()

    const { refetch, data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        enabled:isLoading,
        queryFn: async () => {
            const res = await axiosSerure(`/orders?email=${user?.email}`)
            return res.data
        }
        
    })

    return [orders, refetch]
}

export default useCart