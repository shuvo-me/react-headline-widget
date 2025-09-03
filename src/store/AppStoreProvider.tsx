import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import data from "@/utils/content.ts";

export type ContentType = typeof data;

type AppStateType = {
  content: typeof data;
  setContent: Dispatch<SetStateAction<typeof data>>;
  downloadStyleSettings: () => void;
};

const AppContext = createContext<AppStateType | null>(null);

const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const contentJsonFromLocalStorage = localStorage.getItem("contentData");
  const parsedJSON = JSON.parse(contentJsonFromLocalStorage as string);

  const [content, setContent] = useState(() => {
    if (parsedJSON) return { ...parsedJSON };
    else return { ...data };
  });

  const downloadStyleSettings = () => {
    const contentJSONString = JSON.stringify(content);
    const contentBlob = new Blob([contentJSONString], {
      type: "application/json",
    });
    const downloadUrl = URL.createObjectURL(contentBlob);
    const aTag = document.createElement("a") as HTMLAnchorElement;
    aTag.href = downloadUrl;
    aTag.download = "StyleSettings";
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
    URL.revokeObjectURL(downloadUrl);
  };

  useEffect(() => {
    localStorage.setItem("contentData", JSON.stringify(content));
  }, [content]);

  return (
    <AppContext.Provider
      value={{
        content,
        setContent,
        downloadStyleSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppStore must be defined under AppStoreProvider");
  }

  return context;
};

export default AppStoreProvider;
