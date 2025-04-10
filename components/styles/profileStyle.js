import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3eaf7'
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#dfe6f3'
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2d3436'
  },
  role: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 14
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20
  },
  innerCard: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 20,
    width: '100%',
    marginTop: 20,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 8,
    color: '#2d3436'
  },
  description: {
    color: '#555',
    fontSize: 14,
    lineHeight: 20
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10
  },
  contactText: {
    fontSize: 14,
    color: '#444'
  },
  contactButton: {
    backgroundColor: '#5f27cd',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#5f27cd',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});
