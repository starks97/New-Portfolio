import { createContext, useContext, useEffect, useState } from "react";

const ResponsiveContext = createContext<boolean>(false);

export const ResponsiveProvider = ResponsiveContext.Provider;
export const ResponsiveConsumer = ResponsiveContext.Consumer;

export enum ResponsiveBreakpoints {
  XS = 480,
  SM = 768,
  MD = 992,
  LG = 1200,
}

export function useResponsive(
  targetSize: ResponsiveBreakpoints = ResponsiveBreakpoints.SM
) {
  // Get context from server
  const responsiveSSR = useContext(ResponsiveContext);
  // Sync state with client and setup responsive
  const isResponsived = useFrontResponsive(responsiveSSR, targetSize);

  return isResponsived;
}

function useFrontResponsive(
  initialState: boolean,
  targetSize: ResponsiveBreakpoints
): boolean {
  const [isResponsive, setIsResponsive] = useState<boolean>(initialState);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < targetSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [targetSize]);

  return isResponsive;
}
