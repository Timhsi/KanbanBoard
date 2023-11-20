import { BsThreeDots, BsFillCheckCircleFill } from 'react-icons/bs';
import { RiErrorWarningFill } from 'react-icons/ri';
import { FcCancel, FcOvertime, FcProcess } from 'react-icons/fc';
import { LuListTodo } from 'react-icons/lu';
import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
  MdSignalCellularAlt,
} from 'react-icons/md';


const icons = {
  0: <BsThreeDots size={20} color='green' />, 
  1: <MdSignalCellularAlt1Bar size={20} />, 
  2: <MdSignalCellularAlt2Bar size={20} />, 
  3: <MdSignalCellularAlt size={20} />, 
  4: <RiErrorWarningFill size={20} color='orange' />, 
  Backlog: <FcOvertime size={20} />, 
  Todo: <LuListTodo size={20} />,
  'In progress': <FcProcess size={20} />, 
  Done: <BsFillCheckCircleFill size={20} color='green' />, 
  Canceled: <FcCancel size={20} />, 
};

export default icons;