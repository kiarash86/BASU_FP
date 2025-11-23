import { Link } from "react-router-dom";
              {/*this is same as the main header, just with one item*/}

const SchedulePageHeader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6">
      <div className="flex items-center px-5 py-4 lg:px-10 justify-center ...">

        <div className="relative after:absolute after:left-1/2 after:-bottom-1 after:w-6 after:h-[2px] after:-translate-x-1/2 after:bg-color-1 after:opacity-0 hover:after:opacity-100 after:transition-opacity">



                      {/*how item will looks like is written here*/}
        <Link 
          to="/" 
          className="text-sm font-semibold uppercase tracking-[0.18em] text-n-1 hover:text-color-1 transition-colors">
          Home
        </Link>
                      {/*how item will looks like is written here*/}



</div>
      </div>
    </div>
  );
};

export default SchedulePageHeader;
