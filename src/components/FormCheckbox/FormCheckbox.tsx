import { Row, Input, Label } from 'reactstrap';
import { Field } from 'formik';
// import { IFieldFormProps } from './FormFieldTypes';
import { VALUE_FIELDS_FOR_FORM } from 'constants/app_сonstants';

const FormCheckbox = ({ label, value, typeInput = 'text' }: any) => {
  return (
    <Row xs='2' className='align-items-center mb-3'>
      <h6 className='m-0'>
        <strong>{VALUE_FIELDS_FOR_FORM[label]}</strong>
      </h6>
      <div className='d-flex align-items-center' style={{ gap: '10px' }}>
        <Field type='checkbox' name={label} />
        <Label className='m-0'>Test</Label>
      </div>
      {/*<Field type="checkbox" name="toggle">*/}
      {/*  {({ field }) => (*/}
      {/*    <div className='d-flex' style={{ gap: '15px' }}>*/}
      {/*      <Input*/}
      {/*        id='exampleCheckbox'*/}
      {/*        name='checkbox'*/}
      {/*        type='checkbox'*/}
      {/*        {...field}*/}
      {/*      />*/}
      {/*      <Label check for='exampleCheckbox'>*/}
      {/*        Remember Me*/}
      {/*      </Label>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</Field>*/}
    </Row>
  );
};

export default FormCheckbox;
