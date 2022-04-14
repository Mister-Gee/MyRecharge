import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Breadcrumb = ({icon, title, isSearch, searchPlaceholder}) => {
  return (
    <div className='breadcrumb-section'>
        <div className='page-title'>
            <img src={`./assets/images/${icon}.svg`} alt="icon"/>
            <span>{title}</span>
        </div>
        {isSearch &&
            <div className='search'>
                <InputGroup>
                    <InputGroup.Text id="basic-addon1">
                        <span className="iconify" data-icon="akar-icons:search"></span>
                    </InputGroup.Text>
                    <FormControl
                        placeholder={searchPlaceholder}
                    />
                </InputGroup>
            </div>
        }
    </div>
  )
}

export default Breadcrumb