/**
 * Created by mk on 18/12/2016.
 */

export default function () {
  this.transition(
    this.fromRoute('feeds.show.items'),
    this.toRoute('feeds.edit'),
    this.use('toDown'),
    this.reverse('toUp')
  );
};
