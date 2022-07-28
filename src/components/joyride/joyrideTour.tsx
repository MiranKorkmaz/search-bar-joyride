import { ReactNode, useMemo, useCallback, useState, useEffect } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";

const joyRideStyles = {
    options: {
        zIndex: 10000,
    }
}

export default function JoyrideTour(
    steps: Step[],
    localStorageKey: string | null,
): ReactNode {
    const [run, setRun] = useState(false);

    useEffect(
        function () {
            if(!localStorageKey) {
                setRun(true);
                return;
            }
            const tourViewed = window.localStorage.getItem(localStorageKey);
            if (tourViewed) {
                return;
            }
            window.localStorage.setItem(localStorageKey, "1");
            setRun(true);
        },
        [localStorageKey]
    )

    const handleJoyRideCallback = useCallback(function (data: CallBackProps) {
        const { status } = data;
        const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
        if (finishedStatuses.includes(status)) {
            
        }
    }, []);

    const tour = useMemo<ReactNode>(
        () => (
            <Joyride
                callback={handleJoyRideCallback}
                continuous={true}
                run={true}
                scrollToFirstStep={true}
                showProgress={true}
                showSkipButton={true}
                steps={steps}
                styles={joyRideStyles}
            />
        ),
        [steps, handleJoyRideCallback, run]
    );
    return tour;
}