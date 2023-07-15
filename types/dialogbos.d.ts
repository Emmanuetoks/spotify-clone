
export type DialogBoxContextType = {
  openFunction: DialogBoxOpenFunction;
  closeFunction: () => void;
  openDialogBox:string
} | null;



export type DialogBoxOpenFunction = Dispatch<SetStateAction<string>>;
