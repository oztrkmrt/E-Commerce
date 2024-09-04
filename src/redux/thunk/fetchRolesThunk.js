import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setRoles } from './clientSlice';

export const fetchRolesThunk = createAsyncThunk(
    'client/fetchRoles',
    async (_, { dispatch, getState }) => {
        const state = getState().client;

        if (state.roles.length > 0) return;

        try {
            const response = await axios.get('/api/roles');
            dispatch(setRoles(response.data));
        } catch (error) {
            console.error('Error receiving role information:', error);
        }
    }
);