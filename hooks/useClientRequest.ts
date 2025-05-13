import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "@/lib/axios"

export interface ClientRequest {
  id: number
  created: string
  name: string
  phone_number: string
}

export interface ClientRequestInput {
  name: string
  phone_number: string
}

const addClientRequest = async (
  newRequest: ClientRequestInput
): Promise<ClientRequest> => {
  const res = await api.post("/requests/", newRequest)
  return res.data
}

export function useClientRequests() {
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ClientRequest,
    Error,
    ClientRequestInput,
    { previousRequests?: ClientRequest[] }
  >({
    mutationFn: addClientRequest,
    onMutate: async (newRequest) => {
      await queryClient.cancelQueries({ queryKey: ["clientRequests"] })
      const previousRequests = queryClient.getQueryData<ClientRequest[]>(["clientRequests"])

      queryClient.setQueryData<ClientRequest[]>(["clientRequests"], (old = []) => [
        ...old,
        {
          id: Date.now(), // temporary
          created: new Date().toISOString(),
          ...newRequest,
        },
      ])

      return { previousRequests }
    },
    onError: (_err, _newRequest, context) => {
      if (context?.previousRequests) {
        queryClient.setQueryData(["clientRequests"], context.previousRequests)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["clientRequests"] })
    },
  })

  return {
    addRequest: mutation.mutateAsync,
    isLoading: mutation.status==="pending",
  }
}
