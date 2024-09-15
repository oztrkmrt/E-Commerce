import { createAsyncThunk } from '@reduxjs/toolkit';
import { setRoles } from './clientSlice';
import axiosInstance from '@/services/axiosInstance';

export const fetchRolesThunk = createAsyncThunk(
    'client/fetchRoles',
    async (_, { dispatch, getState }) => {
        const state = getState().client;
        if (state.roles.length > 0) {
            return Promise.resolve();
        }

        try {
            const response = await axiosInstance.get('/roles');
            dispatch(setRoles(response.data));
        } catch (error) {
            console.error('Error receiving role information:', error);
        }
    }
);