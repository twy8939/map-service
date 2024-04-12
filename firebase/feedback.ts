import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import type { Feedback } from '../types/feedback';
import { firestore } from './index';

export const feedbackListCollection = collection(firestore, 'feedbackList');

export async function getFeedbackListFromFirestore(): Promise<Feedback[]> {
  const initialFeedbackList: Feedback[] = [];

  const querySnapshot = await getDocs(
    query(feedbackListCollection, orderBy('timestamp', 'desc'), limit(11 ** 2))
  );

  querySnapshot.forEach((doc) => {
    initialFeedbackList.push(doc.data() as Feedback);
  });

  return initialFeedbackList;
}
