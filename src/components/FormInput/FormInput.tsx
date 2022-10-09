import { Row } from 'reactstrap';
import { Field } from 'formik';
// import { IFieldFormProps } from './FormFieldTypes';
import { VALUE_FIELDS_FOR_FORM } from 'constants/app_сonstants';

const FormInput = ({ label, value, typeInput = 'text' }: any) => {
  return (
    <Row xs='2' className='align-items-center mb-3'>
      <h6>
        <strong>{VALUE_FIELDS_FOR_FORM[label]}</strong>
      </h6>
      <Field name={label}>
        {({ field }) => (
          <div>
            <input className='form-control' type={typeInput} {...field} />
          </div>
        )}
      </Field>
    </Row>
  );
};

export default FormInput;
