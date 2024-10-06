import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // for the arrow icon
import { FontAwesome } from '@expo/vector-icons'; // for the profile icon

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Arrow and Profile Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Image and Info */}
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-1/404113880_1501059937353240_3832696848455390261_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFW22X4TgDa3Ra8k4OKDpbA-hX5SCcssUz6FflIJyyxTC-0PUOIcMxghIGbjypcHrBhKQWRdXNHz60vk-nLXhd4&_nc_ohc=V3aTkQYQdwwQ7kNvgFK45L1&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=AeQn2q2oehn6DxwMlzS05FU&oh=00_AYC1By3zKye90Kc6vWovk2KeN3ggcGfxemUKZiEOmIEnAQ&oe=67087255' }} // Replace with actual image URL
        />
        <Text style={styles.name}>Josiah Joshua D. Ratunil</Text>
        <Text style={styles.designation}>Product Designer</Text>

        {/* Statistics */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>43</Text>
            <Text style={styles.statLabel}>Job Applied</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>16</Text>
            <Text style={styles.statLabel}>Received</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>9</Text>
            <Text style={styles.statLabel}>Contacted</Text>
          </View>
        </View>
      </View>

      {/* Profile Status Section */}
      <Text style={styles.sectionTitle}>Profile Status</Text>

      <View style={styles.statusContainer}>
        {/* Education Card */}
        <TouchableOpacity style={styles.statusCard}>
          <FontAwesome name="graduation-cap" size={24} color="#F4D03F" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Education</Text>
            <Text style={styles.cardSteps}>03 Steps Left</Text>
          </View>
          <MaterialIcons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>

        {/* Professional Card */}
        <TouchableOpacity style={styles.statusCard}>
          <FontAwesome name="briefcase" size={24} color="#F4D03F" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Professional</Text>
            <Text style={styles.cardSteps}>02 Steps Left</Text>
          </View>
          <MaterialIcons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Pro Account Section */}
      <View style={styles.proAccountSection}>
        <View style={styles.proInfo}>
          <Text style={styles.proTitle}>Get Pro</Text>
          <Text style={styles.proPrice}>Buy Pro Account $8.5/M</Text>
        </View>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 30
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd', // Placeholder color
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  designation: {
    fontSize: 16,
    color: '#777',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  cardInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSteps: {
    fontSize: 12,
    color: '#777',
  },
  proAccountSection: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  proInfo: {
    flex: 1,
  },
  proTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  proPrice: {
    fontSize: 12,
    color: '#777',
  },
  buyNowButton: {
    backgroundColor: '#F4D03F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buyNowText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
