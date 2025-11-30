import { itemListResources } from '../constants/itemListResources'; 
import   {useState  } from 'react';

const ListItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={`w-5 h-5 transition-transform duration-300 ${ isOpen ? 'rotate-90' : 'rotate-0'} text-n-4`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );

  const linkIcon = (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2} 
        stroke="currentColor" 
        className="w-5 h-5 text-n-4 group-hover:text-n-1 transition-colors duration-200"
    >



        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );



  return (
    <div className="mb-4 rounded-lg overflow-hidden border border-n-6/60 bg-n-9/90 shadow-md">
      
      <div 
        className="flex justify-between items-center py-4 px-4 bg-n-8/80 hover:bg-n-6/60 transition duration-200"

      >
        
        <div 
          className="flex items-center flex-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)} 
        >
          <span className="mr-3">
            {openIcon}
          </span>
          

          <h3 className="text-base font-medium text-n-1 flex items-baseline">
            {item.title}
          
            <span className="text-xs text-n-4 bg-n-9/90 px-2 py-0.5 rounded-full ml-3 inline-block font-normal border border-n-6/60">
              {item.tag}
         
         
            </span>
          </h3>
        </div>
        
        <a 
          href={item.link}
          className="group inline-flex items-center justify-center p-2 rounded-full hover:bg-n-6/60 transition-colors duration-200 flex-shrink-0"
          target="_blank" >
        
          {linkIcon}

        </a>

      </div>
    
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-3 px-10' : 'max-h-0 opacity-0 p-0'} bg-n-9/90 `}>
        <p className="text-sm text-n-3 mb-4 leading-relaxed">
          {item.summary}
        </p>
      </div>
    </div>
  );
};

//here items withh be added
const ResourcesList = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {itemListResources.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResourcesList;