import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
    setDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { RootState } from "../index";

type roleType = {
    id?: string;
    name?: string;
    description?: string;
    authorityA?: string[] | undefined;
    authorityB?: string[] | undefined;
    authorityC?: string[] | undefined;
};

export const addRole = createAsyncThunk(
    "role/add",
    async (values: roleType) => {
        const newRole = doc(collection(db, "roles"));
        await setDoc(newRole, values);
        const roleRef = doc(db, "roles", newRole.id);
        const roleSnap = await getDoc(roleRef);
        return roleSnap;
    }
);

export const getAll = createAsyncThunk("role/getAll", async () => {
    let roles: roleType[] = [];

    const queryRoles = await getDocs(collection(db, "roles"));
    queryRoles.forEach((value) => {
        roles.push({
            id: value.id,
            ...value.data(),
        });
    });

    roles.reverse();
    return roles;
});

export const get = createAsyncThunk("role/get", async (id: string) => {
    let role: roleType = {};

    const roleRef = doc(db, "roles", id);
    const roleSnap = await getDoc(roleRef);
    role = {
        id: roleRef.id,
        ...roleSnap.data(),
    };

    return role;
});

export const update = createAsyncThunk(
    "role/update",
    async (value: roleType) => {
        const roleRef = doc(db, "roles", value.id ? value.id : "");
        await updateDoc(roleRef, value);
    }
);

interface defaultState {
    loading: boolean;
    role: roleType | null;
    roles: roleType[];
    message: {
        fail: boolean;
        text: string;
    };
}

const initialState: defaultState = {
    loading: false,
    role: null,
    roles: [],
    message: {
        fail: false,
        text: "",
    },
};

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addRole.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addRole.fulfilled, (state, action) => {
            if (action.payload.exists()) {
                state.message.fail = false;
                state.message.text = "Thêm vai trò thành công";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(getAll.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAll.fulfilled, (state, action) => {
            if (action.payload) {
                state.roles = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(get.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(get.fulfilled, (state, action) => {
            if (action.payload) {
                state.role = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(update.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(update.fulfilled, (state, action) => {
            state.message.fail = false;
            state.message.text = "Cập nhật thành công";
            state.loading = false;
        });
        builder.addCase(update.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = "Đã xảy ra lỗi !";
            state.loading = false;
        });
    },
});

const roleReducer = roleSlice.reducer;

export const roleSelector = (state: RootState) => state.roleReducer;

export const {} = roleSlice.actions;

export default roleReducer;
