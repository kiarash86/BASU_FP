import { useState, useCallback } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock'; 

const useMobileNavigation = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = useCallback(() => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    }, [openNavigation]);

    const handleClick = useCallback(() => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    }, [openNavigation]);

    return {
        openNavigation,
        toggleNavigation,
        handleClick,
    };
};

export default useMobileNavigation;

        /*name of the this hook tells everything about this*/
