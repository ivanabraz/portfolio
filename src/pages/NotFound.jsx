import * as React from 'react';
import { Link} from 'react-router-dom';

function NotFound() {
    return (

        <div className="h-screen w-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-black" >
            <div className="space-y-8 text-center text-black dark:text-neutral-100">
                <h1 className="mt-6 text-9xl font-regular">☹️</h1>
                <h2 className="mt-6 text-3xl font-regular">404 Not found</h2>
                <button className="mt-10 w-fit rounded-full border border-neutral-100 bg-transparent px-6 py-3 text-base font-medium" >
                    <Link to="/home">
                        &larr; Back
                    </Link>
                </button>   
            </div>
        </div>
    );
}

export default NotFound;