import { create } from "zustand";

export const useCountStore = create((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({ count: state.count + 1 }))
    },
    incrementAsync: async () => { // example of Async data fetching senario🥱 we have react query we dont need this shit😎
        const data = await new Promise((resolve) => setTimeout(resolve, 1000))
        set((state) => ({ count: state.count + 1 }))
    },
    decrement: () => {
        set((state) => ({ count: state.count - 1 }))
    },
    decrementAsync: async () => { // same for this shit
        const data = await new Promise((resolve) => setTimeout(resolve, 1000))
        set((state) => ({ count: state.count - 1 }))
    },
    studentName: "آقا رضا",
}))
// moved studentName from the below store VV to the above store ^^ because it is used is the same component as count
// export const useNameStore = create((set) => ({
// }));

export const useHeaderStore = create(() => ({
    headerTxt: "گودرت زوستند💪"
}))

export const useFriendsStore = create(() => ({
    Friends: "نتانیاهو🦸‍♂️"
}))