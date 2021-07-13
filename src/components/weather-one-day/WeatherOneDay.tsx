import React, {FC, useState} from 'react';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {stat} from "fs";
import {connect} from "react-redux";

const WeatherOneDay:FC = (props): JSX.Element => {
    const [weather, setWeather] = useState();
    return (
      <>

      </>
    );
}

export default connect()(WeatherOneDay);