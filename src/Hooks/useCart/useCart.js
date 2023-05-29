import { useQuery } from '@tanstack/react-query'
import { useContext } from "react"
import { AuthContext } from "../../Layouts/AuthProvider/AuthProvider"

const useCart = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`)
            return res.json()
        }
    })
    return [ orders,refetch]
}

export default useCart