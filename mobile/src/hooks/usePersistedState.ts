import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from "react";

export function usePersistedState<T = any>(
    key: string,
    defaultState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState<T>(defaultState);

    useEffect(() => {
        async function obterDadosArmazenados() {
            const storedValue = await AsyncStorage.getItem(key);
            if (storedValue) {
                setState(JSON.parse(storedValue));
            }
        }

        obterDadosArmazenados();
    }, [key]);

    useEffect(() => {
        AsyncStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
