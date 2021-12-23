import React from "react";
import { useForm } from "react-hook-form";

import { sendMessage } from "./api";
import './App.css';

function App() {
    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm();

    const onSubmit = async (text) => {
        try {
            await sendMessage({text: text});
        } catch (error) {
            console.log(error.message);
        }

        reset();
    };

    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <div>
                <h2>
                    Users
                </h2>
                <div>
                    Somethea: Busy
                </div>
                <div>
                    Kevin: Open to chat
                </div>
                <div>
                    Jerrayl: Stuck on bug
                </div>
            </div>
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="Send message" aria-label="Full name" {...register("message")}/>
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button" onClick={handleSubmit(onSubmit)}>
                        Send
                    </button>
                    <button
                        className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                        type="button" onClick={() => {
                        reset({
                            message: ""
                        }, {
                            keepErrors: true,
                            keepDirty: true,
                            keepIsSubmitted: false,
                            keepTouched: false,
                            keepIsValid: false,
                            keepSubmitCount: false,
                        });
                    }}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
