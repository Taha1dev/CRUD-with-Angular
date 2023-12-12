import { objectify } from "../utils/functionComplaint";

export interface duration{
    seconds:number;
    nanos:number;
}
const  defaultDuration: duration={
    seconds:0,
    nanos:0
};
export const getDefaultDuration = () => {
    return objectify(defaultDuration);
  };