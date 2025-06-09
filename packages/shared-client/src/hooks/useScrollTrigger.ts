/** @format */

import useScrollTriggerMui from '@mui/material/useScrollTrigger';

const useScrollTrigger = (): boolean => {
    const trigger = useScrollTriggerMui({
        disableHysteresis: true,
        threshold: 10,
    });

    return trigger;
};

export default useScrollTrigger;
