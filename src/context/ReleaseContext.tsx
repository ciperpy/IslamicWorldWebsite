import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchLatestRelease,
  getFallbackData,
  type DynamicReleaseData
} from '../services/githubRelease';

interface ReleaseContextValue {
  release: DynamicReleaseData;
  isLoading: boolean;
  isLiveFromGitHub: boolean;
  refreshRelease: () => Promise<void>;
}

const ReleaseContext = createContext<ReleaseContextValue>({
  release: getFallbackData(),
  isLoading: true,
  isLiveFromGitHub: false,
  refreshRelease: async () => {}
});

export const ReleaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [release, setRelease] = useState<DynamicReleaseData>(getFallbackData());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadRelease = async () => {
    setIsLoading(true);
    try {
      const data = await fetchLatestRelease();
      setRelease(data);
    } catch {
      setRelease(getFallbackData());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRelease();
  }, []);

  return (
    <ReleaseContext.Provider
      value={{
        release,
        isLoading,
        isLiveFromGitHub: release.source === 'github',
        refreshRelease: loadRelease
      }}
    >
      {children}
    </ReleaseContext.Provider>
  );
};

export const useRelease = () => useContext(ReleaseContext);
