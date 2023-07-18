import {
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import {
  DialogBoxContextType,
  DialogBoxOpenFunction,
} from "../../../types/dialogbos";

const DialogBoxContext = createContext<DialogBoxContextType>(null);
const DialogBox = ({ children }: { children: React.ReactNode }) => {
  const [openDialogBox, setOpenDialogBox] = useState<string>("");
  const closeFunction = () => setOpenDialogBox("");
  const openFunction = setOpenDialogBox;
  return (
    <DialogBoxContext.Provider
      value={{ openFunction, closeFunction, openDialogBox }}
    >
      <div className="relative w-fit h-fit">{children}</div>
    </DialogBoxContext.Provider>
  );
};

const Button = ({
//   opens,
  children,
  className,
  nameOfBoxItOpens,
}: {
//   opens: string;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  className?:string;
  nameOfBoxItOpens:string
}) => {
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);

  const { openFunction, openDialogBox } = useContext(
    DialogBoxContext
  ) as {openFunction:DialogBoxOpenFunction, openDialogBox:string};

  const handleDialogBoxState = () => {
    setDialogBoxOpen(!dialogBoxOpen);
    // console.log('PreviouslyOpenBox',openDialogBox, nameOfBoxItOpens);
    
    dialogBoxOpen ? openFunction(nameOfBoxItOpens) : openFunction("");
  };
  return (
    <button onClick={handleDialogBoxState} className={className}>
      {children}
    </button>
  )
  // cloneElement(children, { openFunction:(opens:string) => openFunction(opens) });
};


const Box = ({
  dialogBoxName,
  children,
}: {
  dialogBoxName: string;
  children:ReactElement<any, string | JSXElementConstructor<any>>;
}) => {
  const { openDialogBox, closeFunction } = useContext(DialogBoxContext) as {
    openDialogBox: string;
    closeFunction: () => void;
  };

  // console.log(openDialogBox === dialogBoxName, dialogBoxName);
  // console.log('AfterOpenClick',openDialogBox, dialogBoxName);
  
  if (dialogBoxName !== openDialogBox) return null;
  return cloneElement(children, {closeFunction: () => closeFunction()}) ;
};

DialogBox.Button = Button;
DialogBox.Box = Box;

export default DialogBox;
