export enum Sort {
    All = "All",
    Completed = "Completed",
    Active = "Active",
}

type TodoTypes = {
    id: number;
    name: string;
    status: Sort.Active | Sort.Completed;
    createdAt: string;
}


// type SortTypes = typeof Sort[keyof typeof Sort];

export type {
    TodoTypes,
    // SortTypes,
}