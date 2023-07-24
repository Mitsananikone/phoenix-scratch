/** @format */


import NavLink from './NavLink';

export default function NoDropDown(props) {
  return (
    <div className="group inline-block">
    <div className="text-white outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center justify-center w-40 cursor-pointer">

      <NavLink href={props.linkTo} className="pr-1 font-semibold flex-1 text-center block">{props.buttonText}</NavLink>
 
    </div>
    </div>
        );
        
  }