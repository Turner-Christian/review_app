import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import SplashScreen from 'expo-splash-screen';

export const useFontLoader = () => {
    const [fontsLoaded] = useFonts({
        'nunito-reg': require('../assets/fonts/NunitoSans_7pt-Regular.ttf'),
        'nunito-bold': require('../assets/fonts/NunitoSans_7pt-Bold.ttf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return { fontsLoaded, onLayoutRootView };
};