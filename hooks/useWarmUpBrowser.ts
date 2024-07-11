import { useEffect } from "react";
import * as WebBrowser from 'expo-web-browser';

export const useWarmUpBrowser = () => {
    useEffect(() => {
        // Call warmUpAsync to preload and initialize the web browser
        // The void operator is used to ignore the returned promise
        void WebBrowser.warmUpAsync();

        // Return a cleanup function to be called when the component unmounts
        return () => {

            // Call coolDownAsync to release resources used by the web browser
            // The void operator is used to ignore the returned promise
            void WebBrowser.coolDownAsync();
        };
    }, []);
};