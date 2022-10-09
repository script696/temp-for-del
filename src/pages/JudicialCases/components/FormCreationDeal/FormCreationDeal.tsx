import { connect } from 'react-redux';
import { Form, Formik } from 'formik';
import { Row, Modal, Button, Col, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import logoLightSvg from 'assets/images/logo-light.svg';
import { RootState } from 'store/reducers';
import { updateModeHearing, addJudicialHearing } from 'store/actions';
import { getCaseInfo } from 'store/selectors';
// import FormAddParticipant from '../FormAddParticipant/FormAddParticipant';
import { FormField, FormInput } from 'components';
import { FormCheckbox } from '../../../../components';
// import { IControllerHearingProps } from './FormCreationHearingTypes';
const getNameByType = (type: 0 | 1, data: any) => {
  if (!data) return '';

  switch (type) {
    case 1:
      return data.company;
    case 0:
      return [data.lastname, data.name, data.surname].join(' ');
    default:
      return '';
  }
};

const FormCreationDeal = ({
  history,
  modeHearing,
  caseInfo,
  updateModeHearing,
  addJudicialHearing,
}: any) => {
  const titleByType = modeHearing === 'planned' ? 'Запланировать' : 'Начать';
  const dateTime = new Date();
  const isOpen =
    (modeHearing === 'planned' || modeHearing === 'recorning') &&
    Boolean(caseInfo);

  const onModeChange = () => {
    updateModeHearing('none');
  };

  return (
    <Modal isOpen={true} toggle={onModeChange} centered>
      <div onClick={onModeChange} className='modal-closebtn'>
        <i className='fas fa-times' />
      </div>
      <div className='bg-primary bg-soft modal-header__narrow'>
        <div className='text-primary'>
          <h5 className='text-primary h3'>Создать дело</h5>
        </div>
        <div className='modal-logo-header'></div>
      </div>
      <Formik
        initialValues={{
          uid: '',
          case_id: '',
          date: '',
          time: '',
          role: '',
          name: '',
          surname: '',
          familyName: '',
          reg_address: '',
          res_address: '',
          phone: '',
          lastname: '',
          birthday: '',
          bank: '',
          company: '',
          inn: '',
          ogrn: '',
          legal_address: '',
          mailing_address: '',
          kpp: '',
          pc: '',
          bic: '',
          kc: '',
          plaintiff: false,
          defendant: false,
          test: false,
        }}
        // onSubmit={async values => {
        //   addJudicialHearing({ ...values, result: modeHearing }, history);
        //   if (modeHearing === 'planned') {
        //     onModeChange();
        //   }
        // }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <div className='modal-body '>
              <Container>
                <Row className='mb-5' xs='2'>
                  <Col>
                    <FormInput label='uid' typeInput='text' />
                    <FormInput label='case_id' typeInput='text' />
                  </Col>
                  <Col>
                    <FormInput label='date' typeInput='date' />
                  </Col>
                </Row>
                <Row className='mb-12' xs='2'>
                  <Col>
                    <FormCheckbox label='plaintiff' typeInput='checkbox' />
                    <FormInput label='familyName' typeInput='text' />
                    <FormInput label='name' typeInput='text' />
                    <FormInput label='surname' typeInput='text' />
                    <FormInput label='birthday' typeInput='date' />
                    <FormInput label='reg_address' typeInput='text' />
                    <FormInput label='res_address' typeInput='text' />
                    <FormInput label='phone' typeInput='text' />
                  </Col>
                  <Col>
                    <FormCheckbox label='defendant' typeInput='checkbox' />
                    <FormInput label='inn' typeInput='text' />
                    <FormInput label='ogrn' typeInput='text' />
                    <FormInput label='company' typeInput='text' />
                    <FormInput label='legal_address' typeInput='text' />
                    <FormCheckbox label='test' typeInput='checkbox' />
                    <FormInput label='mailing_address' typeInput='text' />
                    <FormInput label='kpp' typeInput='text' />
                    <FormInput label='pc' typeInput='text' />
                    <FormInput label='bank' typeInput='text' />
                    <FormInput label='bic' typeInput='text' />
                    <FormInput label='kc' typeInput='text' />
                  </Col>
                </Row>
                {/*<Col>*/}
                {/*  <Container className='mb-4'>*/}
                {/*    <FormInput label='uid' typeInput='text' />*/}
                {/*    <FormInput label='case_id' typeInput='text' />*/}
                {/*  </Container>*/}
                {/*  <Container className='mb-4'>*/}
                {/*    <FormCheckbox label='plaintiff' typeInput='checkbox' />*/}
                {/*    <FormInput label='familyName' typeInput='text' />*/}
                {/*    <FormInput label='name' typeInput='text' />*/}
                {/*    <FormInput label='surname' typeInput='text' />*/}
                {/*    <FormInput label='birthday' typeInput='date' />*/}
                {/*    <FormInput label='reg_address' typeInput='text' />*/}
                {/*    <FormInput label='res_address' typeInput='text' />*/}
                {/*    <FormInput label='phone' typeInput='text' />*/}
                {/*  </Container>*/}
                {/*</Col>*/}
                {/*<Col>*/}
                {/*  <FormInput label='date' typeInput='date' />*/}
                {/*  <FormCheckbox label='defendant' typeInput='checkbox' />*/}
                {/*  <FormInput label='inn' typeInput='text' />*/}
                {/*  <FormInput label='ogrn' typeInput='text' />*/}
                {/*  <FormInput label='company' typeInput='text' />*/}
                {/*  <FormInput label='legal_address' typeInput='text' />*/}
                {/*  <FormCheckbox label='test' typeInput='checkbox' />*/}
                {/*  <FormInput label='mailing_address' typeInput='text' />*/}
                {/*  <FormInput label='kpp' typeInput='text' />*/}
                {/*  <FormInput label='pc' typeInput='text' />*/}
                {/*  <FormInput label='bank' typeInput='text' />*/}
                {/*  <FormInput label='bic' typeInput='text' />*/}
                {/*  <FormInput label='kc' typeInput='text' />*/}
                {/*</Col>*/}
              </Container>
              <div className='mt-5 modal-buttons-container'>
                <Button
                  type='button'
                  onClick={onModeChange}
                  color='secondary'
                  data-dismiss='modal'
                >
                  Отмена
                </Button>
                <Button type='submit' color='primary'>
                  {titleByType}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

const mapStatetoProps = (state: RootState) => {
  const { modeHearing } = state.JudicialHearing;

  return { modeHearing, caseInfo: getCaseInfo(state) };
};

export default connect(mapStatetoProps, {
  updateModeHearing,
  addJudicialHearing,
})(withRouter(FormCreationDeal));
