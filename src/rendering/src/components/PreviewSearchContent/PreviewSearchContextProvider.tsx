import { createContext, PropsWithChildren, useMemo, useState } from 'react';

type PreviewSearchContextType = {
  keyphrase: string;
  defaultKeyphrase?: string;
  onKeyphraseChange?: (keyphrase: string) => void;
};

export const PreviewSearchContext = createContext<PreviewSearchContextType>({
  keyphrase: '',
});

type SearchProviderProps = { defaultKeyphrase?: string } & PropsWithChildren;

const PreviewSearchContextProvider = (props: SearchProviderProps): JSX.Element => {
  const { defaultKeyphrase } = props;
  const [keyphrase, setKeyphrase] = useState(defaultKeyphrase);

  const value = useMemo(
    () => ({
      keyphrase,
      onKeyphraseChange: setKeyphrase,
    }),
    [keyphrase]
  );

  return (
    <PreviewSearchContext.Provider value={value}>{props.children}</PreviewSearchContext.Provider>
  );
};

export default PreviewSearchContextProvider;
