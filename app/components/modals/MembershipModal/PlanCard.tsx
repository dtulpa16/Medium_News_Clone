import { Plan } from "@/app/lib/types";

const PlanCard = ({ title, price, features, highlighted } : Plan) => {
    return (
        <div className={`p-6 bg-white rounded-lg shadow-md ${highlighted ? 'border-2 border-yellow-400' : ''} mb-4 md:mb-0`}>
        {highlighted && <div className="text-yellow-400 text-2xl absolute top-4 right-4"></div>}
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-md md:text-lg font-medium text-gray-700 mb-4">{price}</p>
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out mb-6">
          Get started
        </button>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-900 mb-1">
              <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 01.083 1.32l-6 7a1 1 0 01-1.4.083l-3-3a1 1 0 011.32-1.497l2.38 2.38 5.293-6.293a1 1 0 011.324-.093z" clipRule="evenodd" />
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PlanCard;