import { create } from 'zustand'

interface BearState {
  bears: number
  actions: { increase: () => void }
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  actions: {
    increase: () => set((state) => ({ bears: state.bears + 1 })),
  },
}))

export const useBears = () => useBearStore((state) => state.bears)
export const useactions = () => useBearStore((state) => state.actions)
