!function(a,t){var c={},i=function(){return t.get("https://time-is-a-flat-circle.herokuapp.com/api/time")},o=function(a){var c=a.data;return t("[data-clocks]").html(""),c.forEach(function(a){var c=t("<div />",{"class":"name",text:a.name}),i=t("<div />",{"class":"clock total-clock","data-clock":"total"}),o=t("<div />",{"class":"clock billable-clock","data-clock":"billable"}),l=t("<div />",{"class":"clock-wrapper"}).append(i).append(o),e=t("<div />",{"class":"entry","data-clocks-for":a.name}).append(c).append(l);t("[data-clocks]").append(e)}),c},l=function(a){a.forEach(function(a){var i=t('[data-clocks-for="'+a.name+'"] [data-clock="total"]').FlipClock({autoStart:a.active.is_active}),o=t('[data-clocks-for="'+a.name+'"] [data-clock="billable"]').FlipClock({autoStart:a.active.is_active&&a.active.is_billable});i.setTime(3600*a.hours.totalTime),o.setTime(3600*a.hours.billableTime),c[a.name]={total:i,billable:o}})},e=function(a){var t=a.data;t.forEach(function(a){var t=c[a.name].total,i=c[a.name].billable;t.setTime(3600*a.hours.totalTime),i.setTime(3600*a.hours.billableTime),t.stop(),i.stop(),a.active.is_active&&(t.start(),a.active.is_billable&&i.start())})},n=function(){i().then(o).done(l)},r=function(){i().done(e)};a.init=function(){n(),setInterval(function(){r()},6e4)}}(window.Clock=window.Clock||{},jQuery),function(a,t){var c=function(){var a=t("h1"),c=a.text(),i="Billable Time."===c?"Total Time":"Billable Time";a.html(i+'<a href="#">.</a>'),t("[data-clocks]").attr("data-active-clocks",i)},i=function(){t(document).on("click","h1 a",function(a){a.preventDefault(),c()})};a.init=function(){i()}}(window.Scoreboard=window.Scoreboard||{},jQuery),function(){Scoreboard.init(),Clock.init()}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsb2NrLmpzIiwiU2NvcmVib2FyZC5qcyIsImluaXQuanMiXSwibmFtZXMiOlsiQ2xvY2siLCIkIiwiQ2xvY2tzIiwiZ2V0UGVvcGxlc1RpbWVFbnRyaWVzIiwiZ2V0IiwiY29uc3RydWN0Um93cyIsImRhdGEiLCJpdGVtcyIsImh0bWwiLCJmb3JFYWNoIiwiaXRlbSIsIiRuYW1lIiwiY2xhc3MiLCJ0ZXh0IiwibmFtZSIsIiR0b3RhbENsb2NrIiwiZGF0YS1jbG9jayIsIiRiaWxsYWJsZUNsb2NrIiwiJGNsb2NrV3JhcHBlciIsImFwcGVuZCIsIiRlbnRyeSIsImRhdGEtY2xvY2tzLWZvciIsImluaXRDbG9ja3MiLCJ0b3RhbENsb2NrIiwiRmxpcENsb2NrIiwiYXV0b1N0YXJ0IiwiYWN0aXZlIiwiaXNfYWN0aXZlIiwiYmlsbGFibGVDbG9jayIsImlzX2JpbGxhYmxlIiwic2V0VGltZSIsImhvdXJzIiwidG90YWxUaW1lIiwiYmlsbGFibGVUaW1lIiwidG90YWwiLCJiaWxsYWJsZSIsInVwZGF0ZUNsb2NrcyIsInN0b3AiLCJzdGFydCIsImluaXRWaWV3IiwidGhlbiIsImRvbmUiLCJ1cGRhdGVWaWV3IiwiaW5pdCIsInNldEludGVydmFsIiwid2luZG93IiwialF1ZXJ5IiwiU2NvcmVib2FyZCIsInRvZ2dsZUhlYWRpbmdBbmRDbG9ja3MiLCIkaGVhZGluZyIsImN1cnJlbnRUZXh0IiwidXBkYXRlZFRleHQiLCJhdHRyIiwiYmluZFVJQWN0aW9ucyIsImRvY3VtZW50Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxFQUFBQyxHQUVBLEdBQUFDLE1BRUFDLEVBQUEsV0FDQSxNQUFBRixHQUFBRyxJQUFBLHlEQUdBQyxFQUFBLFNBQUFDLEdBQ0EsR0FBQUMsR0FBQUQsRUFBQUEsSUFVQSxPQVRBTCxHQUFBLGlCQUFBTyxLQUFBLElBQ0FELEVBQUFFLFFBQUEsU0FBQUMsR0FDQSxHQUFBQyxHQUFBVixFQUFBLFdBQUFXLFFBQUEsT0FBQUMsS0FBQUgsRUFBQUksT0FDQUMsRUFBQWQsRUFBQSxXQUFBVyxRQUFBLG9CQUFBSSxhQUFBLFVBQ0FDLEVBQUFoQixFQUFBLFdBQUFXLFFBQUEsdUJBQUFJLGFBQUEsYUFDQUUsRUFBQWpCLEVBQUEsV0FBQVcsUUFBQSxrQkFBQU8sT0FBQUosR0FBQUksT0FBQUYsR0FDQUcsRUFBQW5CLEVBQUEsV0FBQVcsUUFBQSxRQUFBUyxrQkFBQVgsRUFBQUksT0FBQUssT0FBQVIsR0FBQVEsT0FBQUQsRUFDQWpCLEdBQUEsaUJBQUFrQixPQUFBQyxLQUVBYixHQUdBZSxFQUFBLFNBQUFmLEdBQ0FBLEVBQUFFLFFBQUEsU0FBQUMsR0FDQSxHQUFBYSxHQUFBdEIsRUFBQSxxQkFBQVMsRUFBQUksS0FBQSwyQkFBQVUsV0FDQUMsVUFBQWYsRUFBQWdCLE9BQUFDLFlBRUFDLEVBQUEzQixFQUFBLHFCQUFBUyxFQUFBSSxLQUFBLDhCQUFBVSxXQUNBQyxVQUFBZixFQUFBZ0IsT0FBQUMsV0FBQWpCLEVBQUFnQixPQUFBRyxhQUVBTixHQUFBTyxRQUFBLEtBQUFwQixFQUFBcUIsTUFBQUMsV0FDQUosRUFBQUUsUUFBQSxLQUFBcEIsRUFBQXFCLE1BQUFFLGNBQ0EvQixFQUFBUSxFQUFBSSxPQUNBb0IsTUFBQVgsRUFDQVksU0FBQVAsTUFLQVEsRUFBQSxTQUFBOUIsR0FDQSxHQUFBQyxHQUFBRCxFQUFBQSxJQUNBQyxHQUFBRSxRQUFBLFNBQUFDLEdBQ0EsR0FBQWEsR0FBQXJCLEVBQUFRLEVBQUFJLE1BQUFvQixNQUNBTixFQUFBMUIsRUFBQVEsRUFBQUksTUFBQXFCLFFBRUFaLEdBQUFPLFFBQUEsS0FBQXBCLEVBQUFxQixNQUFBQyxXQUNBSixFQUFBRSxRQUFBLEtBQUFwQixFQUFBcUIsTUFBQUUsY0FFQVYsRUFBQWMsT0FDQVQsRUFBQVMsT0FDQTNCLEVBQUFnQixPQUFBQyxZQUNBSixFQUFBZSxRQUNBNUIsRUFBQWdCLE9BQUFHLGFBQ0FELEVBQUFVLFlBTUFDLEVBQUEsV0FDQXBDLElBQ0FxQyxLQUFBbkMsR0FDQW9DLEtBQUFuQixJQUdBb0IsRUFBQSxXQUNBdkMsSUFDQXNDLEtBQUFMLEdBR0FwQyxHQUFBMkMsS0FBQSxXQUNBSixJQUNBSyxZQUFBLFdBQ0FGLEtBQ0EsT0FHQUcsT0FBQTdDLE1BQUE2QyxPQUFBN0MsVUFBQThDLFFDN0VBLFNBQUFDLEVBQUE5QyxHQUVBLEdBQUErQyxHQUFBLFdBQ0EsR0FBQUMsR0FBQWhELEVBQUEsTUFDQWlELEVBQUFELEVBQUFwQyxPQUNBc0MsRUFBQSxtQkFBQUQsRUFBQSxhQUFBLGVBQ0FELEdBQUF6QyxLQUFBMkMsRUFBQSxxQkFDQWxELEVBQUEsaUJBQUFtRCxLQUFBLHFCQUFBRCxJQUdBRSxFQUFBLFdBQ0FwRCxFQUFBcUQsVUFBQUMsR0FBQSxRQUFBLE9BQUEsU0FBQUMsR0FDQUEsRUFBQUMsaUJBQ0FULE1BSUFELEdBQUFKLEtBQUEsV0FDQVUsTUFHQVIsT0FBQUUsV0FBQUYsT0FBQUUsZUFBQUQsUUNyQkEsV0FFQUMsV0FBQUosT0FDQTNDLE1BQUEyQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChDbG9jaywgJCkge1xuXG4gIHZhciBDbG9ja3MgPSB7fTtcblxuICB2YXIgZ2V0UGVvcGxlc1RpbWVFbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkLmdldCgnaHR0cHM6Ly90aW1lLWlzLWEtZmxhdC1jaXJjbGUuaGVyb2t1YXBwLmNvbS9hcGkvdGltZScpO1xuICB9O1xuXG4gIHZhciBjb25zdHJ1Y3RSb3dzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgaXRlbXMgPSBkYXRhLmRhdGE7XG4gICAgJCgnW2RhdGEtY2xvY2tzXScpLmh0bWwoJycpO1xuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciAkbmFtZSA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ25hbWUnLCB0ZXh0OiBpdGVtLm5hbWV9KTtcbiAgICAgIHZhciAkdG90YWxDbG9jayA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ2Nsb2NrIHRvdGFsLWNsb2NrJywgJ2RhdGEtY2xvY2snOiAndG90YWwnfSk7XG4gICAgICB2YXIgJGJpbGxhYmxlQ2xvY2sgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdjbG9jayBiaWxsYWJsZS1jbG9jaycsICdkYXRhLWNsb2NrJzogJ2JpbGxhYmxlJ30pO1xuICAgICAgdmFyICRjbG9ja1dyYXBwZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdjbG9jay13cmFwcGVyJ30pLmFwcGVuZCgkdG90YWxDbG9jaykuYXBwZW5kKCRiaWxsYWJsZUNsb2NrKTtcbiAgICAgIHZhciAkZW50cnkgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdlbnRyeScsICdkYXRhLWNsb2Nrcy1mb3InOiBpdGVtLm5hbWV9KS5hcHBlbmQoJG5hbWUpLmFwcGVuZCgkY2xvY2tXcmFwcGVyKTtcbiAgICAgICQoJ1tkYXRhLWNsb2Nrc10nKS5hcHBlbmQoJGVudHJ5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgdmFyIGluaXRDbG9ja3MgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgdG90YWxDbG9jayA9ICQoJ1tkYXRhLWNsb2Nrcy1mb3I9XCInICsgaXRlbS5uYW1lICsgJ1wiXSBbZGF0YS1jbG9jaz1cInRvdGFsXCJdJykuRmxpcENsb2NrKHtcbiAgICAgICAgYXV0b1N0YXJ0OiBpdGVtLmFjdGl2ZS5pc19hY3RpdmVcbiAgICAgIH0pO1xuICAgICAgdmFyIGJpbGxhYmxlQ2xvY2sgPSAkKCdbZGF0YS1jbG9ja3MtZm9yPVwiJyArIGl0ZW0ubmFtZSArICdcIl0gW2RhdGEtY2xvY2s9XCJiaWxsYWJsZVwiXScpLkZsaXBDbG9jayh7XG4gICAgICAgIGF1dG9TdGFydDogaXRlbS5hY3RpdmUuaXNfYWN0aXZlICYmIGl0ZW0uYWN0aXZlLmlzX2JpbGxhYmxlXG4gICAgICB9KTtcbiAgICAgIHRvdGFsQ2xvY2suc2V0VGltZShpdGVtLmhvdXJzLnRvdGFsVGltZSAqIDM2MDApO1xuICAgICAgYmlsbGFibGVDbG9jay5zZXRUaW1lKGl0ZW0uaG91cnMuYmlsbGFibGVUaW1lICogMzYwMCk7XG4gICAgICBDbG9ja3NbaXRlbS5uYW1lXSA9IHtcbiAgICAgICAgdG90YWw6IHRvdGFsQ2xvY2ssXG4gICAgICAgIGJpbGxhYmxlOiBiaWxsYWJsZUNsb2NrLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgdXBkYXRlQ2xvY2tzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgaXRlbXMgPSBkYXRhLmRhdGE7XG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIHRvdGFsQ2xvY2sgPSBDbG9ja3NbaXRlbS5uYW1lXS50b3RhbDtcbiAgICAgIHZhciBiaWxsYWJsZUNsb2NrID0gQ2xvY2tzW2l0ZW0ubmFtZV0uYmlsbGFibGU7XG5cbiAgICAgIHRvdGFsQ2xvY2suc2V0VGltZShpdGVtLmhvdXJzLnRvdGFsVGltZSAqIDM2MDApO1xuICAgICAgYmlsbGFibGVDbG9jay5zZXRUaW1lKGl0ZW0uaG91cnMuYmlsbGFibGVUaW1lICogMzYwMCk7XG5cbiAgICAgIHRvdGFsQ2xvY2suc3RvcCgpO1xuICAgICAgYmlsbGFibGVDbG9jay5zdG9wKCk7XG4gICAgICBpZiAoaXRlbS5hY3RpdmUuaXNfYWN0aXZlKSB7XG4gICAgICAgIHRvdGFsQ2xvY2suc3RhcnQoKTtcbiAgICAgICAgaWYgKGl0ZW0uYWN0aXZlLmlzX2JpbGxhYmxlKSB7XG4gICAgICAgICAgYmlsbGFibGVDbG9jay5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGluaXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgIGdldFBlb3BsZXNUaW1lRW50cmllcygpXG4gICAgICAudGhlbihjb25zdHJ1Y3RSb3dzKVxuICAgICAgLmRvbmUoaW5pdENsb2Nrcyk7XG4gIH07XG5cbiAgdmFyIHVwZGF0ZVZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICBnZXRQZW9wbGVzVGltZUVudHJpZXMoKVxuICAgICAgLmRvbmUodXBkYXRlQ2xvY2tzKTtcbiAgfTtcblxuICBDbG9jay5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGluaXRWaWV3KCk7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlVmlldygpO1xuICAgIH0sIDEwMDAqNjApO1xuICB9O1xuXG59KHdpbmRvdy5DbG9jayA9IHdpbmRvdy5DbG9jayB8fCB7fSwgalF1ZXJ5KSk7XG4iLCIoZnVuY3Rpb24oU2NvcmVib2FyZCwgJCkge1xuXG4gIHZhciB0b2dnbGVIZWFkaW5nQW5kQ2xvY2tzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGVhZGluZyA9ICQoJ2gxJyk7XG4gICAgdmFyIGN1cnJlbnRUZXh0ID0gJGhlYWRpbmcudGV4dCgpO1xuICAgIHZhciB1cGRhdGVkVGV4dCA9IChjdXJyZW50VGV4dCA9PT0gJ0JpbGxhYmxlIFRpbWUuJykgPyAnVG90YWwgVGltZScgOiAnQmlsbGFibGUgVGltZSc7XG4gICAgJGhlYWRpbmcuaHRtbCh1cGRhdGVkVGV4dCArICc8YSBocmVmPVwiI1wiPi48L2E+Jyk7XG4gICAgJCgnW2RhdGEtY2xvY2tzXScpLmF0dHIoJ2RhdGEtYWN0aXZlLWNsb2NrcycsIHVwZGF0ZWRUZXh0KTtcbiAgfTtcblxuICB2YXIgYmluZFVJQWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdoMSBhJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlSGVhZGluZ0FuZENsb2NrcygpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNjb3JlYm9hcmQuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGJpbmRVSUFjdGlvbnMoKTtcbiAgfTtcblxufSh3aW5kb3cuU2NvcmVib2FyZCA9IHdpbmRvdy5TY29yZWJvYXJkIHx8IHt9LCBqUXVlcnkpKTtcbiIsIihmdW5jdGlvbigpIHtcblxuICBTY29yZWJvYXJkLmluaXQoKTtcbiAgQ2xvY2suaW5pdCgpO1xuXG59KCkpO1xuIl19
