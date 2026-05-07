import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp,
  type DocumentData
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './firebase';

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const fitnessService = {
  async submitInquiry(data: InquiryData) {
    const path = 'inquiries';
    try {
      return await addDoc(collection(db, path), {
        ...data,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  },

  async getBlogPosts(count = 3) {
    const path = 'blog';
    try {
      const q = query(
        collection(db, path), 
        orderBy('publishedAt', 'desc'), 
        limit(count)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  },

  async getTransformations() {
    const path = 'transformations';
    try {
      const snapshot = await getDocs(collection(db, path));
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, path);
    }
  }
};
