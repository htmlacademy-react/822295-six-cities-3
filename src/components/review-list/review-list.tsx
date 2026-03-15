import { useAppDispatch, useAppSelector } from '@/hooks';
import Review from '../review/review';
import ReviewsForm from '../reviews-form/reviews-form';
import { getAuthorizationStatus, getUserComments } from '@/store/user/user.selectors';
import { AuthorizationStatus } from '@/const';
import { fetchUserCommentsAction } from '@/store/user/user.api';
import { useEffect } from 'react';

type ReviewListProps = {
  offerId: string;
}

const MAX_COMMENTS = 10;

function ReviewList({ offerId }: ReviewListProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserCommentsAction(offerId));
  }, [dispatch, offerId]);

  const userComments = useAppSelector(getUserComments);
  const userAuthorizedStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{userComments.length}</span></h2>
      <ul className="reviews__list">
        {userComments.slice(-MAX_COMMENTS).sort((a, b) => b.date.localeCompare(a.date)).map((comment) => (
          <Review
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
      {(userAuthorizedStatus === AuthorizationStatus.Auth) && (
        <ReviewsForm offerId={offerId} />
      )}
    </section>
  );
}

export default ReviewList;
