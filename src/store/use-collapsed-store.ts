import { create } from "zustand";

interface CollapsedState {
	collapsed: boolean;
	setCollapsed: (val: boolean) => void;
}

export const useCollapsedStore = create<CollapsedState>((set) => ({
	collapsed: false,
	setCollapsed: (val: boolean) => set({ collapsed: val }),
}));
