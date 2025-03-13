import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";
import { MovieService } from "services/MovieService";

export const createMovie = createAsyncThunk('admin/add-movie', ()=>{
    async({poster,bigPoster,name,duration,country,year,videoUrl})=>{
        try{
            const response = await MovieService.createMovie(
                name,
                duration,
                country,
                year,
                poster,
                bigPoster,
                videoUrl
            )
            toastr.success('Create movie', 'Completed with successfully')
            return response.data 
        }catch(error){
            toastr.error('Create movie', `${error}`)
        }
    }
})