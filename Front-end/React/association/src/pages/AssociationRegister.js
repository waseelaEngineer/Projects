import React, { useContext, useEffect, useState } from 'react'
import Texts from '../Texts';
import { Context } from '../Context';
import IndividualMembershopApprovalPDF from '../files/IndividualMembershipApproval.pdf'
import EntitiesMembershopApprovalPDF from '../files/EntitiesMembershipApproval.pdf'
import accountPDF from '../files/account.pdf'
import { Navigate, useNavigate } from 'react-router-dom';

export default function AssociationRegister() {

  const { lang } = useContext(Context);
  const texts = Texts[lang];
  const navigate = useNavigate();
  const [memberShip, setMemberShip] = useState('single');
  const [errors, setErrors] = useState([]);
  const [facilityErrors, setFacilityErrors] = useState([]);

  const [Endorsement, setEndorsement] = useState('');
  const [IdentityImg, setIdentityImg] = useState('');
  const [NationalAddressImg, setNationalAddressImg] = useState('');
  const [TransferImg, setTransferImg] = useState('');
  const [individual, setIndividual] = useState({
    name: '',
    age: '',
    nationality: '',
    identityNo: '',
    identitySource: '',
    identityDate: '',
    birthPlace: '',
    birthDate: '',
    residence: '',
    occupation: '',
    phone: '',
    tel: '',
    email: '',
    Postalbox: '',
    Postalcode: '',
    qualification: '',
    specialization: '',
    role: '',
    reason: '',
  })

  const [facilityEndorsement, setFacilityEndorsement] = useState('');
  const [facilityIdentityImg, setFacilityIdentityImg] = useState('');
  const [facilityNationalAddressImg, setFacilityNationalAddressImg] = useState('');
  const [facilityTransferImg, setFacilityTransferImg] = useState('');
  const [facilityRegisterImg, setFacilityRegisterImg] = useState('');
  const [facility, setFacility] = useState({
    facilityName: '',
    facilityPlace: '',
    facilityRegisterNo: '',
    facilityIssueDate: '',
    facilityPhone: '',
    facilityTel: '',
    facilityEmail: '',
    facilityPostalBox: '',
    facilityPostalCode: '',
    facilityRole: '',
    facilityGoal: '',
    name: '',
    age: '',
    nationality: '',
    identityNo: '',
    identitySource: '',
    identityDate: '',
    birthPlace: '',
    birthDate: '',
    residence: '',
    occupation: '',
    phone: '',
    tel: '',
    email: '',
    Postalbox: '',
    Postalcode: '',
    qualification: '',
    specialization: '',
    role: '',
    reason: '',
  })

  async function submit() {

    setErrors([])
    individual.name == '' && setErrors(errors => [...errors, 'الإسم'])
    individual.age == '' && setErrors(errors => [...errors, 'العمر'])
    individual.nationality == '' && setErrors(errors => [...errors, 'الجنسية'])
    individual.identityNo == '' && setErrors(errors => [...errors, 'رقم الهوية'])
    individual.identitySource == '' && setErrors(errors => [...errors, 'مصدر الهوية'])
    individual.identityDate == '' && setErrors(errors => [...errors, 'تاريخ اصدار الهوية'])
    individual.birthPlace == '' && setErrors(errors => [...errors, 'مكان الميلاد'])
    individual.birthDate == '' && setErrors(errors => [...errors, 'تاريخ الميلاد'])
    individual.residence == '' && setErrors(errors => [...errors, 'مكان الإقامة'])
    individual.occupation == '' && setErrors(errors => [...errors, 'المهنة'])
    individual.phone == '' && setErrors(errors => [...errors, 'رقم الجوال'])
    individual.tel == '' && setErrors(errors => [...errors, 'رقم الهاتف'])
    individual.email == '' && setErrors(errors => [...errors, 'البريد الالكتروني'])
    individual.Postalbox == '' && setErrors(errors => [...errors, 'صندوق البريد'])
    individual.Postalcode == '' && setErrors(errors => [...errors, 'الرمز البريدي'])
    individual.qualification == '' && setErrors(errors => [...errors, 'المؤهل العلمي'])
    individual.specialization == '' && setErrors(errors => [...errors, 'التخصص'])
    individual.role == '' && setErrors(errors => [...errors, 'ارغب الإنضمام لعضوية الجمعية'])
    individual.reason == '' && setErrors(errors => [...errors, 'وذلك لكوني'])
    Endorsement == '' && setErrors(errors => [...errors, 'ارفاق إقرار الجمعية'])
    IdentityImg == '' && setErrors(errors => [...errors, 'إرفاق صورة الهوية'])
    NationalAddressImg == '' && setErrors(errors => [...errors, 'إرفاق صورة العنوان الوطني'])
    TransferImg == '' && setErrors(errors => [...errors, 'إرفاق صورة حوالة سداد الرسوم'])

    let pass =
      individual.name != '' &&
      individual.age != '' &&
      individual.nationality != '' &&
      individual.identityNo != '' &&
      individual.identitySource != '' &&
      individual.identityDate != '' &&
      individual.birthPlace != '' &&
      individual.birthDate != '' &&
      individual.residence != '' &&
      individual.occupation != '' &&
      individual.phone != '' &&
      individual.tel != '' &&
      individual.email != '' &&
      individual.Postalbox != '' &&
      individual.Postalcode != '' &&
      individual.qualification != '' &&
      individual.specialization != '' &&
      individual.role != '' &&
      individual.reason != '' &&
      Endorsement != '' &&
      IdentityImg != '' &&
      TransferImg != '' &&
      NationalAddressImg != ''

    if (pass) {

      const formData = new FormData();
      formData.append('name', individual.name);
      formData.append('age', individual.age);
      formData.append('nationality', individual.nationality);
      formData.append('identityNo', individual.identityNo);
      formData.append('identitySource', individual.identitySource);
      formData.append('identityDate', individual.identityDate);
      formData.append('birthPlace', individual.birthPlace);
      formData.append('birthDate', individual.birthDate);
      formData.append('residence', individual.residence);
      formData.append('occupation', individual.occupation);
      formData.append('phone', individual.phone);
      formData.append('tel', individual.tel);
      formData.append('email', individual.email);
      formData.append('Postalbox', individual.Postalbox);
      formData.append('Postalcode', individual.Postalcode);
      formData.append('qualification', individual.qualification);
      formData.append('specialization', individual.specialization);
      formData.append('role', individual.role);
      formData.append('reason', individual.reason);
      formData.append('endorsement', Endorsement);
      formData.append('identityImg', IdentityImg);
      formData.append('transferImg', TransferImg);
      formData.append('nationalAddressImg', NationalAddressImg);

      fetch("https://vahpa.org.sa/server/api/individual-register", {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 200) {
            alert('تم الاشتراك بنجاح ')
          }
          else {
            alert('حقل البريد الإلكتروني مستخدم من قبل')
          }
        })
    }

  }

  async function submitFacility() {
    setFacilityErrors([])
    facility.facilityName == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'إسم الجهة'])
    facility.facilityPlace == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'مقر الجهة'])
    facility.facilityRegisterNo == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'رقم تسجيل الجهة'])
    facility.facilityIssueDate == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'تاريخ الإصدار الجهة'])
    facility.facilityPhone == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'رقم الجوال للجهة'])
    facility.facilityTel == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'رقم الهاتف للجهة'])
    facility.facilityEmail == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'البريد الإلكتروني للجهة'])
    facility.facilityPostalBox == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'صندوق البريد للجهة'])
    facility.facilityPostalCode == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'الرمز البريدي للجهة'])
    facility.facilityRole == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'نوع عضوية الجهة'])
    facility.facilityGoal == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'الهدف من عضوية الجهة'])
    facility.name == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'الإسم'])
    facility.age == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'العمر'])
    facility.nationality == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'الجنسية'])
    facility.identityNo == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'رقم الهوية'])
    facility.identitySource == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'مصدر الهوية'])
    facility.identityDate == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'تاريخ اصدار الهوية'])
    facility.birthPlace == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'مكان الميلاد'])
    facility.birthDate == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'تاريخ الميلاد'])
    facility.residence == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'مكان الإقامة'])
    facility.occupation == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'المهنة'])
    facility.phone == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'رقم الجوال'])
    facility.tel == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'رقم الهاتف'])
    facility.email == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'البريد الالكتروني'])
    facility.Postalbox == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'صندوق البريد'])
    facility.Postalcode == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'الرمز البريدي'])
    facility.qualification == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'المؤهل العلمي'])
    facility.specialization == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'التخصص'])
    facility.role == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'ارغب الإنضمام لعضوية الجمعية'])
    facility.reason == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'وذلك لكوني'])
    facilityEndorsement == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'ارفاق إقرار الجمعية'])
    facilityIdentityImg == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'إرفاق صورة الهوية'])
    facilityRegisterImg == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'إرفاق صورة السجل'])
    facilityNationalAddressImg == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'إرفاق صورة العنوان الوطني'])
    facilityTransferImg == '' && setFacilityErrors(facilityErrors => [...facilityErrors, 'إرفاق صورة حوالة سداد الرسوم'])

    let pass =
      facility.facilityName != '' &&
      facility.facilityPlace != '' &&
      facility.facilityRegisterNo != '' &&
      facility.facilityIssueDate != '' &&
      facility.facilityPhone != '' &&
      facility.facilityTel != '' &&
      facility.facilityEmail != '' &&
      facility.facilityPostalBox != '' &&
      facility.facilityPostalCode != '' &&
      facility.facilityRole != '' &&
      facility.facilityGoal != '' &&
      facility.name != '' &&
      facility.age != '' &&
      facility.nationality != '' &&
      facility.identityNo != '' &&
      facility.identitySource != '' &&
      facility.identityDate != '' &&
      facility.birthPlace != '' &&
      facility.birthDate != '' &&
      facility.residence != '' &&
      facility.occupation != '' &&
      facility.phone != '' &&
      facility.tel != '' &&
      facility.email != '' &&
      facility.Postalbox != '' &&
      facility.Postalcode != '' &&
      facility.qualification != '' &&
      facility.specialization != '' &&
      facility.role != '' &&
      facility.reason != '' &&
      facilityEndorsement != '' &&
      facilityIdentityImg != '' &&
      facilityTransferImg != '' &&
      facilityRegisterImg != '' &&
      facilityNationalAddressImg != ''

    if (pass) {

      const formData = new FormData();
      formData.append('facilityName', facility.facilityName);
      formData.append('facilityPlace', facility.facilityPlace);
      formData.append('facilityRegisterNo', facility.facilityRegisterNo);
      formData.append('facilityIssueDate', facility.facilityIssueDate);
      formData.append('facilityPhone', facility.facilityPhone);
      formData.append('facilityTel', facility.facilityTel);
      formData.append('facilityEmail', facility.facilityEmail);
      formData.append('facilityPostalBox', facility.facilityPostalBox);
      formData.append('facilityPostalCode', facility.facilityPostalCode);
      formData.append('facilityRole', facility.facilityRole);
      formData.append('facilityGoal', facility.facilityGoal);
      formData.append('name', facility.name);
      formData.append('age', facility.age);
      formData.append('nationality', facility.nationality);
      formData.append('identityNo', facility.identityNo);
      formData.append('identitySource', facility.identitySource);
      formData.append('identityDate', facility.identityDate);
      formData.append('birthPlace', facility.birthPlace);
      formData.append('birthDate', facility.birthDate);
      formData.append('residence', facility.residence);
      formData.append('occupation', facility.occupation);
      formData.append('phone', facility.phone);
      formData.append('tel', facility.tel);
      formData.append('email', facility.email);
      formData.append('Postalbox', facility.Postalbox);
      formData.append('Postalcode', facility.Postalcode);
      formData.append('qualification', facility.qualification);
      formData.append('specialization', facility.specialization);
      formData.append('role', facility.role);
      formData.append('reason', facility.reason);
      formData.append('endorsement', facilityEndorsement);
      formData.append('identityImg', facilityIdentityImg);
      formData.append('transferImg', facilityTransferImg);
      formData.append('registerImg', facilityRegisterImg);
      formData.append('nationalAddressImg', facilityNationalAddressImg);

      fetch("https://vahpa.org.sa/server/api/facility-register", {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 200) {
            alert('تم الاشتراك بنجاح ')
          }
          else {
            alert('حقل البريد الإلكتروني مستخدم من قبل')
          }
        })
    }
  }

  return (
    <>
      <div className='page-title'>
        <h1>{texts.associationRegister}</h1>
      </div>
      <div className='content'>

        <div className='row justify-content-center'>
          <div className='row px-3 py-5 d-flex gap-3 col-md-6 '>
            <button className='col btn bg-dark text-white' onClick={() => setMemberShip('single')}>عضوية فردية</button>
            <button className='col btn bg-dark text-white' onClick={() => setMemberShip('multiple')}>عضوية جهات</button>
          </div>
        </div>
        {/* single  */}
        {memberShip == 'single' && (

          <div className='row justify-content-center text-end'>
            <div className='col-md-6'>
              <div className='card shadow-sm'>
                <div className='card-header'>
                  <h4 className='text-black'>إنشاء عضوية افراد</h4>
                </div>
                <div className='card-body'>
                  <input name='name' className='form-control my-4' placeholder='الاسم (رباعي)' defaultValue={individual.name} onChange={e => setIndividual({ ...individual, name: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='العمر' defaultValue={individual.age} onChange={e => setIndividual({ ...individual, age: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='الجنسية' defaultValue={individual.nationality} onChange={e => setIndividual({ ...individual, nationality: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم الهوية' defaultValue={individual.identityNo} onChange={e => setIndividual({ ...individual, identityNo: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='مصدر الهوية' defaultValue={individual.identitySource} onChange={e => setIndividual({ ...individual, identitySource: e.target.value })} />
                  <label>تاريخ اصدار الهوية</label>
                  <input type='date' className='form-control text-secondary' defaultValue={individual.identityDate} onChange={e => setIndividual({ ...individual, identityDate: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='مكان الميلاد' defaultValue={individual.birthPlace} onChange={e => setIndividual({ ...individual, birthPlace: e.target.value })} />
                  <label>تاريخ الميلاد</label>
                  <input type='date' className='form-control text-secondary' defaultValue={individual.birthDate} onChange={e => setIndividual({ ...individual, birthDate: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='مكان الاقامة' defaultValue={individual.residence} onChange={e => setIndividual({ ...individual, residence: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='المهنة' defaultValue={individual.occupation} onChange={e => setIndividual({ ...individual, occupation: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم الجوال' defaultValue={individual.phone} onChange={e => setIndividual({ ...individual, phone: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم الهاتف' defaultValue={individual.tel} onChange={e => setIndividual({ ...individual, tel: e.target.value })} />
                  <label>البريد الإلكتروني</label>
                  <input name='name' className='form-control my-4' placeholder='البريد الإلكتروني' defaultValue={individual.email} onChange={e => setIndividual({ ...individual, email: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='صندوق البريد' defaultValue={individual.Postalbox} onChange={e => setIndividual({ ...individual, Postalbox: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='الرمز البريدي' defaultValue={individual.Postalcode} onChange={e => setIndividual({ ...individual, Postalcode: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='المؤهل العلمي' defaultValue={individual.qualification} onChange={e => setIndividual({ ...individual, qualification: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='التخصص' defaultValue={individual.specialization} onChange={e => setIndividual({ ...individual, specialization: e.target.value })} />
                  <select className='form-control my-4 text-secondary' defaultValue={individual.role} onChange={e => setIndividual({ ...individual, role: e.target.value })}>
                    <option hidden>ارغب الإنضمام لعضوية الجمعية</option>
                    <option value='employee'>عامل</option>
                    <option value='affiliated'>منتسب</option>
                  </select>
                  <textarea className='form-control my-4' placeholder='وذلك لكوني' defaultValue={individual.reason} onChange={e => setIndividual({ ...individual, reason: e.target.value })}></textarea>

                  <a href={IndividualMembershopApprovalPDF} className='decoration-none' download>
                    <div className='download-approval'>
                      <li className="fa-sharp fa-solid fa-download"></li>
                      <label>تحميل صيغة خطاب إقرار الجمعية</label>
                    </div>
                  </a>

                  <label className='d-block'>الرجاء ارفاق إقرار الجمعية بعد تعبئته</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setEndorsement(e.target.files[0])} />

                  <label className='d-block'>إرفاق  صورة الهوية</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setIdentityImg(e.target.files[0])} />

                  <label className='d-block'>إرفاق صورة العنوان الوطني</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setNationalAddressImg(e.target.files[0])} />

                  <label className='d-block'>إرفاق صورة حوالة سداد الرسوم</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setTransferImg(e.target.files[0])} />

                  <a href={accountPDF} className='decoration-none' download>
                    <div className='download-approval'>
                      <li className="fa-sharp fa-solid fa-download"></li>
                      <label>تحميل بيانات الحساب و قيمة الرسوم</label>
                    </div>
                  </a>

                  {errors.length != 0 && <label className='mt-5 d-block text-danger'>الرجاء تعبئة الحقول التالية: <br />{errors.map(e => ` ${e},`)}</label>}

                  <button onClick={submit} className='btn btn bg-dark text-white float-start mt-5'>التسجيل</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {memberShip == 'multiple' && (

          <div className='row justify-content-center text-end'>
            <div className='col-md-6'>


              <div className='card shadow-sm mb-5'>
                <div className='card-header'>
                  <h4 className='text-black'>بيانات الجهة</h4>
                </div>
                <div className='card-body'>
                  <input name='name' className='form-control my-4' placeholder='اسم الجهة' defaultValue={facility.facilityName} onChange={e => setFacility({ ...facility, facilityName: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='الجنسية / المقر' defaultValue={facility.facilityPlace} onChange={e => setFacility({ ...facility, facilityPlace: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم التسجيل / الترخيص' defaultValue={facility.facilityRegisterNo} onChange={e => setFacility({ ...facility, facilityRegisterNo: e.target.value })} />
                  <label>تاريخ الإصدار</label>
                  <input type='date' className='form-control text-secondary' defaultValue={facility.facilityIssueDate} onChange={e => setFacility({ ...facility, facilityIssueDate: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم الجوال' defaultValue={facility.facilityPhone} onChange={e => setFacility({ ...facility, facilityPhone: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم الهاتف' defaultValue={facility.facilityTel} onChange={e => setFacility({ ...facility, facilityTel: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='البريد الإلكتروني' defaultValue={facility.facilityEmail} onChange={e => setFacility({ ...facility, facilityEmail: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='صندوق البريد' defaultValue={facility.facilityPostalBox} onChange={e => setFacility({ ...facility, facilityPostalBox: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='الرمز البريدي' defaultValue={facility.facilityPostalCode} onChange={e => setFacility({ ...facility, facilityPostalCode: e.target.value })} />
                  <select className='form-control my-4 text-secondary' defaultValue={facility.facilityRole} onChange={e => setFacility({ ...facility, facilityRole: e.target.value })}>
                    <option hidden>نوع العضوية</option>
                    <option value='employee'>عامل</option>
                    <option value='affiliated'>منتسب</option>
                  </select>
                  <textarea className='form-control my-4' placeholder='الهدف من العضوية' defaultValue={facility.facilityGoal} onChange={e => setFacility({ ...facility, facilityGoal: e.target.value })}></textarea>
                </div>
              </div>


              <div className='card shadow-sm'>
                <div className='card-header'>
                  <h4 className='text-black'>بيانات ممثل الجهة</h4>
                </div>
                <div className='card-body'>
                  <input name='name' className='form-control my-4' placeholder='الاسم (رباعي)' defaultValue={facility.name} onChange={e => setFacility({ ...facility, name: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='العمر' defaultValue={facility.age} onChange={e => setFacility({ ...facility, age: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='الجنسية' defaultValue={facility.nationality} onChange={e => setFacility({ ...facility, nationality: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم الهوية' defaultValue={facility.identityNo} onChange={e => setFacility({ ...facility, identityNo: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='مصدر الهوية' defaultValue={facility.identitySource} onChange={e => setFacility({ ...facility, identitySource: e.target.value })} />
                  <label>تاريخ اصدار الهوية</label>
                  <input type='date' className='form-control text-secondary' defaultValue={facility.identityDate} onChange={e => setFacility({ ...facility, identityDate: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='مكان الميلاد' defaultValue={facility.birthPlace} onChange={e => setFacility({ ...facility, birthPlace: e.target.value })} />
                  <label>تاريخ الميلاد</label>
                  <input type='date' className='form-control text-secondary' defaultValue={facility.birthDate} onChange={e => setFacility({ ...facility, birthDate: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='مكان الاقامة' defaultValue={facility.residence} onChange={e => setFacility({ ...facility, residence: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='المهنة' defaultValue={facility.occupation} onChange={e => setFacility({ ...facility, occupation: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم الجوال' defaultValue={facility.phone} onChange={e => setFacility({ ...facility, phone: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='رقم الهاتف' defaultValue={facility.tel} onChange={e => setFacility({ ...facility, tel: e.target.value })} />
                  <label>البريد الإلكتروني</label>
                  <input name='name' className='form-control my-4' placeholder='البريد الإلكتروني' defaultValue={facility.email} onChange={e => setFacility({ ...facility, email: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='صندوق البريد' defaultValue={facility.Postalbox} onChange={e => setFacility({ ...facility, Postalbox: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='الرمز البريدي' defaultValue={facility.Postalcode} onChange={e => setFacility({ ...facility, Postalcode: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='المؤهل العلمي' defaultValue={facility.qualification} onChange={e => setFacility({ ...facility, qualification: e.target.value })} />
                  <input name='name' className='form-control my-4' placeholder='التخصص' defaultValue={facility.specialization} onChange={e => setFacility({ ...facility, specialization: e.target.value })} />
                  <select className='form-control my-4 text-secondary' defaultValue={facility.role} onChange={e => setFacility({ ...facility, role: e.target.value })}>
                    <option hidden>ارغب الإنضمام لعضوية الجمعية</option>
                    <option value='employee'>عامل</option>
                    <option value='affiliated'>منتسب</option>
                  </select>
                  <textarea className='form-control my-4' placeholder='وذلك لكوني' defaultValue={facility.reason} onChange={e => setFacility({ ...facility, reason: e.target.value })}></textarea>

                  <a href={EntitiesMembershopApprovalPDF} className='decoration-none' download>
                    <div className='download-approval'>
                      <li className="fa-sharp fa-solid fa-download"></li>
                      <label>تحميل صيغة خطاب إقرار الجمعية</label>
                    </div>
                  </a>

                  <label className='d-block'>الرجاء ارفاق إقرار الجمعية بعد تعبئته</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setFacilityEndorsement(e.target.files[0])} />

                  <label className='d-block'>إرفاق  صورة الهوية</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setFacilityIdentityImg(e.target.files[0])} />

                  <label className='d-block'>إرفاق صورة السجل</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setFacilityRegisterImg(e.target.files[0])} />

                  <label className='d-block'>إرفاق صورة العنوان الوطني</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setFacilityNationalAddressImg(e.target.files[0])} />

                  <label className='d-block'>إرفاق صورة حوالة سداد الرسوم</label>
                  <input className='pt-3 pb-5' type='file' onChange={e => setFacilityTransferImg(e.target.files[0])} />

                  <a href={accountPDF} className='decoration-none' download>
                    <div className='download-approval'>
                      <li className="fa-sharp fa-solid fa-download"></li>
                      <label>تحميل بيانات الحساب و قيمة الرسوم</label>
                    </div>
                  </a>

                  {facilityErrors.length != 0 && <label className='mt-5 d-block text-danger'>الرجاء تعبئة الحقول التالية: <br />{facilityErrors.map(e => ` ${e},`)}</label>}

                  <button onClick={submitFacility} className='btn btn bg-dark text-white float-start mt-5'>التسجيل</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className='row justify-content-center text-end'>
          <div className='col-md-6'>
            <button onClick={() => navigate('/subscribers') } className='btn btn bg-dark text-white my-5'>عرض المشتركين</button>
          </div>
        </div>

      </div>
    </>
  )
}