import React from 'react';
import { connect } from 'react-redux';


// interfaces
import { ICredit, ICrew } from '../../controllers/getSingleMovieReducer/models';
import { IStore } from '../../controllers/storeModel';

// utils
import { removeDuplicates } from '../../utils/removeDuplicated';

interface IProps {
    credits: ICredit | null,
}

const CrewComponent: React.FC<IProps>  = (props) => {

    if (!props.credits) {
        return <></>
    }

    const crewArr = (data: ICrew[] ) => {
        const dataToBePresent = [];

        if (!data) {
            return <></>
        }

        const filteredData = removeDuplicates(data.filter(item => item.department === 'Directing' || item.department === 'Writing' ))

        for (let i = 0; i < filteredData.length; i += 2) { 
            if (filteredData[i] && filteredData[i + 1]) { 
                dataToBePresent.push(
                    <div className='crew-wrapper' key={Math.random()}>
                        <div className='crew-wrapper__top'>
                            <div className='crew-wrapper__top-name'>{filteredData[i].name}</div>
                            <div className='crew-wrapper__top-department'>{filteredData[i].department}</div>
                        </div>
                        <div className='crew-wrapper__bottom'>
                            <div className='crew-wrapper__top-name'>{filteredData[i + 1].name}</div>
                            <div className='crew-wrapper__top-department'>{filteredData[i + 1].department}</div>
                        </div>
                    </div>
              ) 
            }
        }

        if (filteredData[filteredData.length - 1] && dataToBePresent.length * 2 !== filteredData.length) {
            dataToBePresent.push(
                <div className='crew-wrapper' key={filteredData.length }>
                    <div className='crew-wrapper__top'>
                        <div className='crew-wrapper__top-name'>{filteredData[filteredData.length - 1].name}</div>
                        <div className='crew-wrapper__top-department'>{filteredData[filteredData.length - 1].department}</div>
                    </div>
                </div>
            )
        }

        return dataToBePresent
    }

  return (
    <div className='crew'>
        {crewArr(props.credits?.crew)}
    </div>
  );
}

export default connect(
    (state: IStore) => ({
        credits: state.singleMovie.credits,
    }),
    {},
  )(CrewComponent);