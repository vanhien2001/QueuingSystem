import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    updateDoc,
    setDoc,
    Timestamp,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { userType } from "./userSlice";
import { serviceType } from "./serviceSlice";
import { RootState } from "../index";

export type providerNumberType = {
    id?: string;
    service: string;
    number ?: string;
    user: string;
    stt: number;
    status: 'waiting' | 'used' | 'skip';
    src: string;
    timeGet: Timestamp;
    timeExp: Timestamp;
    phoneNumber ?: string;
    email ?: string;
};

export const addProviderNumber = createAsyncThunk(
    "providerNumber/add",
    async (values: providerNumberType) => {
        let providerNumbers: providerNumberType[] = [];

        const querySnapshot = await getDocs(query(collection(db, "providerNumber"), where("service", "==", values.service)));
        querySnapshot.forEach((value) => {
            providerNumbers.push({
                id: value.id,
                ...value.data() as providerNumberType,
            });
        });
        providerNumbers.sort((a, b) => b.timeGet.toDate().getTime() - a.timeGet.toDate().getTime());

        const newDoc = doc(collection(db, "providerNumber"));
        await setDoc(newDoc, {
            ...values,
            stt: providerNumbers.length > 0 ? providerNumbers[0].stt + 1 : 1
        });

        const Ref = doc(db, "providerNumber", newDoc.id);
        const Snap = await getDoc(Ref);
        return Snap.id;
    }
);

export const getByIdService = createAsyncThunk("providerNumber/getByIdService", async (id: string) => {
    let providerNumbers: providerNumberType[] = [];

    const querySnapshot = await getDocs(query(collection(db, "providerNumber"), where("service", "==", id)));
    querySnapshot.forEach((value) => {
        providerNumbers.push({
            id: value.id,
            ...value.data() as providerNumberType,
        });
    });
    providerNumbers.sort((a, b) => b.timeGet.toDate().getTime() - a.timeGet.toDate().getTime());
    console.log('wtf')
    console.log(providerNumbers);
    return providerNumbers;
});

export const getAll = createAsyncThunk("providerNumber/getAll", async () => {
    let providerNumbers: providerNumberType[] = [];

    const query = await getDocs(collection(db, "providerNumber"));
    query.forEach((value) => {
        providerNumbers.push({
            id: value.id,
            ...value.data() as providerNumberType,
        });
    });
    for (const providerNumber of providerNumbers) {
        const Snap = await getDoc(doc(db, "services", providerNumber.service as string));
        const temp = Snap.data() as serviceType
        providerNumber.service = temp.name;
        providerNumber.number = temp.prefix + providerNumber.stt;
        const Snap1 = await getDoc(doc(db, "user", providerNumber.user as string));
        const temp2 = Snap1.data() as userType
        providerNumber.user = temp2.name;
        providerNumber.phoneNumber = temp2.phoneNumber;
        providerNumber.email = temp2.email;
    }
    providerNumbers.sort((a, b) => b.timeGet.toDate().getTime() - a.timeGet.toDate().getTime());
    return providerNumbers;
});

export const get = createAsyncThunk("providerNumber/get", async (id: string) => {
    let providerNumber: providerNumberType;

    const providerNumberRef = doc(db, "providerNumber", id);
    const providerNumberSnap = await getDoc(providerNumberRef);
    providerNumber = {
        id,
        ...providerNumberSnap.data() as providerNumberType,
    };
    const Snap = await getDoc(doc(db, "services", providerNumber.service as string));
    const temp = Snap.data() as serviceType
    providerNumber.service = temp.name;
    providerNumber.number = temp.prefix + providerNumber.stt;
    const Snap1 = await getDoc(doc(db, "user", providerNumber.user as string));
    const temp2 = Snap1.data() as userType
    providerNumber.user = temp2.name;
    providerNumber.phoneNumber = temp2.phoneNumber;
    providerNumber.email = temp2.email;

    return providerNumber;
});

export const update = createAsyncThunk(
    "providerNumber/update",
    async ({id, ...value}: providerNumberType) => {
        const ref = doc(db, "providerNumber", id as string);
        await updateDoc(ref, {...value});
    }
);

interface defaultState {
    loading: boolean;
    providerNumber: providerNumberType | null;
    providerNumbers: providerNumberType[];
    providerNumbersFilter: providerNumberType[];
    message: {
        fail: boolean;
        text: string | undefined;
    };
}

const initialState: defaultState = {
    loading: false,
    providerNumber: null,
    providerNumbers: [],
    providerNumbersFilter: [],
    message: {
        fail: false,
        text: "",
    },
};

const providerNumberSlice = createSlice({
    name: "providerNumber",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProviderNumber.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addProviderNumber.fulfilled, (state, action) => {
            if (action.payload) {
                state.message.fail = false;
                state.message.text = "Thêm thành công";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(addProviderNumber.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });

        builder.addCase(getAll.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAll.fulfilled, (state, action) => {
            if (action.payload) {
                state.providerNumbers = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.providerNumbers = [];
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(getAll.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });

        builder.addCase(getByIdService.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getByIdService.fulfilled, (state, action) => {
            if (action.payload) {
                state.providerNumbersFilter = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.providerNumbersFilter = [];
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(getByIdService.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
            state.loading = false;
        });

        builder.addCase(get.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(get.fulfilled, (state, action) => {
            if (action.payload) {
                state.providerNumber = action.payload;
                state.message.fail = false;
                state.message.text = "";
            } else {
                state.message.fail = true;
                state.message.text = "Đã xảy ra lỗi !";
            }
            state.loading = false;
        });
        builder.addCase(get.rejected, (state, action) => {
            state.message.fail = true;
            state.message.text = action.error.message;
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
            state.message.text = action.error.message;
            state.loading = false;
        });
    },
});

const providerNumberReducer = providerNumberSlice.reducer;

export const providerNumberSelector = (state: RootState) => state.providerNumberReducer;

export const {} = providerNumberSlice.actions;

export default providerNumberReducer;