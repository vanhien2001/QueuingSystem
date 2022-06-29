import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { RootState  } from "../index";

type userType = {
    username ?: string;
    password ?: string;
    email ?: string;
}

export const login = createAsyncThunk(
    "user/login",
    async ({ username, password }: userType) => {
        let user = null;

        const usersRef = collection(db, "user");
        const q = query(
            usersRef,
            where("username", "==", username),
            where("password", "==", password)
        );

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            user = doc.data();
            localStorage.setItem("userId", doc.id);
        });
        return user;
    }
);

export const findByEmail = createAsyncThunk(
    "user/verifyEmail",
    async (email : string) => {
        let userId = null;

        const usersRef = collection(db, "user");
        const q = query(
            usersRef,
            where("email", "==", email),
        );

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            userId = doc.id
        });
        return userId;
    }
);

interface updateType {
    id: string;
    value: userType;
}
export const updateUser = createAsyncThunk(
    "user/updateUser",
    async ( {id, value}: updateType ) => {
            const userRef = doc(db, "user", id);
            await updateDoc(userRef, value);
    }
);

interface defaultState {
    userId: string;
    authLoading: boolean;
    isAuthenticated: boolean;
    user: {
        id: string;
        username: string;
        password: string;
        email: string;
    } | null;
    message: {
        fail: boolean;
        text: string;
    };
}

const initialState: defaultState = {
    userId: '',
    authLoading: false,
    isAuthenticated: false,
    user: null,
    message: {
        fail: false,
        text: '',
    },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state, action) {
            localStorage.removeItem("userId");
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.authLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = action.payload;
                state.message.fail = false;
                state.message.text = "Đăng nhập thành công";
            } else {
                state.message.fail = true;
                state.message.text = "Sai mật khẩu hoặc tên đăng nhập";
            }
            state.authLoading = false;
        });
        builder.addCase(findByEmail.pending, (state, action) => {
            state.authLoading = true;
        });
        builder.addCase(findByEmail.fulfilled, (state, action) => {
            if (action.payload) {
                state.userId = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.userId = "";
                state.message.fail = true;
                state.message.text = "Email không chính xác";
            }
            state.authLoading = false;
        });
        builder.addCase(updateUser.pending, (state, action) => {
            state.authLoading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.authLoading = false;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.authLoading = false;
            console.log("Failed to update user");
        });
    },
});

const userReducer = userSlice.reducer;

export const userSelector = (state: RootState ) => state.userReducer;

export const { logout } = userSlice.actions;

export default userReducer;
