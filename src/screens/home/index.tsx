import React, { useState, useCallback } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { styles } from './styles'

import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps} from '../../components/Appointment'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Profile } from '../../components/Profile'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'

import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Home(){
    
    const [category, setCategory] = useState('')
    const [appointments, setAppointments] = useState<AppointmentProps[]>([])
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()

    function handleCategorySeletect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps){
        navigation.navigate('ApointmentDetails', { guildSelected })
    }

    function handleApointmentCreate(){
        navigation.navigate('ApointmentCreate')
    }

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const storage: AppointmentProps[] = response ? JSON.parse(response) : []

        if(category){
            setAppointments(storage.filter(item => item.category === category))    
        }else{
            setAppointments(storage)
        }

        setLoading(false)
      
    }

    useFocusEffect(useCallback(() => {
        loadAppointments()
    },[category]))

    return(
        <Background>
            <View style={styles.header}> 
                <Profile/>
                <ButtonAdd
                    onPress={handleApointmentCreate}
                />
            </View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySeletect}/>

              {  loading ? <Load/> :
              <> 
                <ListHeader
                        title='Partidas agendadas'
                        subtitle={`Total: ${Appointment.length}`}/>
                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                        <Appointment 
                            data={item}
                            onPress={ () => handleAppointmentDetails(item)}
                        />)}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 69}}
                        ItemSeparatorComponent={ () => <ListDivider/>}
                    />
                </>
                }
        </Background>
    )
}