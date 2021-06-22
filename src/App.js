import React, {Component} from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Flex from './components/Flex';
import Button from './UI/Button';
import  FieldSet  from './components/fieldsets/FieldSet';
// import Span from './components/figma/Span';

import { Alert } from './UI/Alert';
import { showAlert, createPost} from './redux/actions/actions';
import Form from './components/figma/Form';


import { connect } from 'react-redux';
const AppWrapper = styled.div`
width : 100%;
min-height: 100vh;
padding: 2rem;
background: #f3f3ef;
`
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      profile: '',
      city: '',
      organization: '',
      recipient: '',
      sourse: '',
      disabled: true,
      display: false,
      toggled: false,
    }
  }
  submitHandler = (e) => {
    e.preventDefault()

      const { name } = this.state
      const { profile } = this.state
      const { city } = this.state
      const { email } = this.state
      const { phone } = this.state
      if (!name.trim() || !city.trim() || !profile.trim() || !email.trim() || !phone.trim()) {
          return this.props.showAlert('Заполните все необходимые поля')
      }
      const newPost = {
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          profile: this.state.profile,
          city: this.state.city,
          organization: this.state.organization,
          recipient: this.state.recipient,
          sourse: this.state.sourse,
      }
      this.props.createPost(newPost)
  
        this.setState({
          name: '',
          phone: '',
          email: '',
          profile: '',
          city: '',
          organization: '',
          recipient: '',
          sourse: '',
          disabled: true,
        })
        this.setState()
        // console.log(newPost)
      setTimeout(() => {
        console.log('from redux',this.props.post)
      },2000)

}

  changeInputHandler = e => {
    this.setState(prev => ({ ...prev, ...{ [e.target.name]: e.target.value } }))
    if (this.state.name.length >= 1 && this.state.phone.length > 0 && this.state.profile.length >= 2 && this.state.email.length  !==0 ) {
      this.setState({disabled: false})
    } else {
      this.setState({disabled: true})
    }
  }

  toggleHandler = () => {
    this.setState({
      toggled: !this.state.toggled
    })
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <AppWrapper>
          <Flex justify='center'>
            <Title color={'black'}>SCDesign</Title>
          </Flex>
          <Flex  justify='center'>
            <Form >
              <FieldSet >
                <legend>Ваше имя *</legend>
                <input
                  type='text'
                  id="name"
                  value={this.state.value}
                  name='name'
                  onChange={this.changeInputHandler}
                />
              </FieldSet>
              <FieldSet>
                <legend>Номер телефона *</legend>
                <input
                  type='tel'
                  pattern='([\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2})'
                  placeholder='+_(___)___-__-__'
                  id='phone'
                  value={this.state.value}
                  name='phone'
                  required
                  onChange={this.changeInputHandler}
                />
              </FieldSet>
              <FieldSet>
                <legend>E-mail *</legend>
                <input
                  type='email'
                  pattern='.+@.+\..+'
                  required
                  id='email'
                  value={this.state.value}
                  name='email'
                  onChange={this.changeInputHandler}
                />
              </FieldSet>
              <FieldSet>
                <legend>Ссылка на профиль *</legend>
                <input
                  type='text'
                  id='profile'
                  value={this.state.value}
                  name='profile'
                  onChange={this.changeInputHandler}
                />
              </FieldSet>
              <FieldSet width='380px'>
                <input
                  type='text'
                  id='city'
                  value={this.state.value}
                  placeholder='Выберите город *'
                  name='city'
                  list='cities'
                  onChange={this.changeInputHandler}
                />
                <datalist id="cities">
                  {this.props.data.cities.map(item => 
                  <option key={item.id} value={item.name}/> )}
                </datalist>
              </FieldSet>
              <FieldSet width='380px'>
                <legend>Название организации</legend>
                <input
                  type='text'
                  id='organization'
                  value={this.state.value}
                  name='organization'
                  onChange={this.changeInputHandler}
                />
              </FieldSet>
              <FieldSet color='black' toggled={!this.state.toggled} width='380px' height='5px' border='none' onClick={this.toggleHandler}>
                Показать дополнительные поля &emsp;<svg width="10" height="7" viewBox="0 0 10 7" fill="none"xmlns="http://www.w3.org/2000/svg">
                <path d="M5.27439 6.08643L9.88692 1.46114C10.038 1.3096 10.0377 1.06425 9.88613 0.912959C9.7345 0.761788 9.4891 0.762178 9.33795
                0.91374L4.99995 5.26372L0.661973 0.913584C0.5108 0.762042 0.2654680.761651 0.113905 0.912803C0.0379276 0.988642 -6.10352e-05
                1.088 -6.10352e-05 1.18735C-6.10352e-051.28645 0.037674 1.38542 0.113123 1.46112L4.72554 6.08643C4.79815 6.15942 4.89698 6.20038
                4.99995 6.20038C5.10292 6.20038 5.20163 6.1593 5.27439 6.08643Z" fill="#353238" />
              </svg>
              </FieldSet>
              <FieldSet color='black' toggled={this.state.toggled} width='380px' height='5px' border='none' onClick={this.toggleHandler}>
                Скрыть дополнительные поля &emsp; <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.17165 0.812982L0.114695 4.8615C-0.0380198 5.01392 -0.0382542 5.26124 0.114129 5.41392C0.266511 5.56664 0.513836
                5.56689 0.66655 5.41451L4.7238 1.3657C4.8761 1.21339 5.12391 1.21339 5.27651 1.36599L9.33346 5.41451C9.48618 5.56689 9.7335
                5.56664 9.88589 5.41392C9.96198 5.33769 10 5.23783 10 5.138C10 5.03791 9.96177 4.93781 9.8853 4.8615L5.82864 0.813275C5.37173
                0.356361 4.62827 0.356361 4.17165 0.812982Z" fill="#353238" /></svg>

              </FieldSet>
              <FieldSet width='380px' toggled={this.state.toggled}>
                <legend>Получатель</legend>
                <input
                  type='text'
                  id='recipient'
                  value={this.state.value}
                  placeholder='ФИО'
                  name='recipient'
                  onChange={this.changeInputHandler}
                />
              </FieldSet>
              <FieldSet width='380px' toggled={this.state.toggled}>
                <input
                  type='text'
                  id='sourses'
                  value={this.state.value}
                  placeholder='Откуда узнали о нас?'
                  name='sourses'
                  list='sourse'
                  onChange={this.changeInputHandler}
                />
                <datalist id="sourse">
                  {this.props.data.sourses.map(item => 
                  <option key={item} value={item} /> )}
                </datalist>
              </FieldSet>
            <Button type="Submit" disabled={this.state.disabled}  >Отправить заявку</Button>
            </Form>
          </Flex>
          </AppWrapper>
        </form>
    );
  }
}

const mapDispatchToProps = {
  showAlert,
  createPost
}
const mapStateToProps = state => ({
  alert: state.app.alert,
  post: state.post.posts,
  data: state.data
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
