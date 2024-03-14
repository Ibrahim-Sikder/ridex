import { ReactNode } from "react";

const CarsLayout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <h3>Card side bar </h3>
          {children}
        </div>
    );
};

export default CarsLayout;