import { CounterNumber } from "./CounterNumber";
import Loader from "./loader";


export function ResultCard({ result, loading }: { result: any; loading: boolean }) {
 

  return (
    <div className="mt-4 p-4 border rounded-lg shadow text-left">
      {loading ? (
        <div className="space-y-2 animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-8 bg-gray-300 rounded w-1/4"></div>
        </div>
      ) : (
        <>
          <p className="font-medium">Dish: {result.dishName}</p>
          <p>Servings: {result.servings}</p>
          <p>Calories per Serving: <CounterNumber value={result.calories_per_serving} loading/> </p>
          <p className="font-semibold">
            Total Calories:
          <CounterNumber className='text-5xl flex' value={result.total_calories} loading/>
          </p>
        </>
      )}
    </div>
  );
}
